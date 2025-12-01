<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserService
{
    public function __construct(
        protected UserRepository $userRepository
    ) {}

    public function register(array $data): User
    {
        $this->validateRegistration($data);

        $data['password'] = Hash::make($data['password']);
        $data['role'] = $data['role'] ?? 'user';

        return $this->userRepository->create($data);
    }

    public function authenticate(string $email, string $password): ?User
    {
        $user = $this->userRepository->findByEmail($email);

        if (!$user || !Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = \Illuminate\Support\Str::random(60);
        $user->forceFill([
            'token' => $token,
        ])->save();

        return $user;
    }

    public function updateProfile(int $userId, array $data): User
    {
        $user = $this->userRepository->findOrFail($userId);
        
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        $this->userRepository->update($userId, $data);
        return $user->fresh();
    }

    public function getUserProfile(int $userId): User
    {
        return $this->userRepository->getUserWithHeroes($userId);
    }

    public function getAllUsers()
    {
        return $this->userRepository->getAllUsers();
    }

    public function loginWithGoogle(string $token): User
    {
        // Verify Google token
        $googleUser = $this->verifyGoogleToken($token);
        
        if (!$googleUser) {
            throw new \Exception('Invalid Google token', 401);
        }

        // Find or create user
        $user = $this->userRepository->findByEmail($googleUser['email']);

        if ($user) {
            // Update existing user with Google info if not already set
            if (!$user->google_id) {
                $this->userRepository->update($user->id, [
                    'google_id' => $googleUser['id'],
                    'provider' => 'google',
                    'avatar' => $googleUser['picture'] ?? null,
                    'email_verified_at' => now(),
                ]);
                $user = $user->fresh();
            }
        } else {
            // Create new user from Google account
            $user = $this->userRepository->create([
                'email' => $googleUser['email'],
                'username' => $googleUser['name'] ?? explode('@', $googleUser['email'])[0],
                'google_id' => $googleUser['id'],
                'provider' => 'google',
                'avatar' => $googleUser['picture'] ?? null,
                'role' => 'user',
                'email_verified_at' => now(),
                'password' => null, // No password for OAuth users
            ]);
        }

        return $user;
    }

    protected function verifyGoogleToken(string $token): ?array
    {
        try {
            // Call Google's token verification endpoint
            $client = new \GuzzleHttp\Client();
            $response = $client->get('https://oauth2.googleapis.com/tokeninfo', [
                'query' => ['id_token' => $token]
            ]);

            $data = json_decode($response->getBody(), true);

            // Verify the token is valid
            if (!isset($data['email']) || !isset($data['sub'])) {
                return null;
            }

            return [
                'id' => $data['sub'],
                'email' => $data['email'],
                'name' => $data['name'] ?? null,
                'picture' => $data['picture'] ?? null,
                'email_verified' => $data['email_verified'] ?? false,
            ];
        } catch (\Exception $e) {
            \Log::error('Google token verification failed: ' . $e->getMessage());
            return null;
        }
    }

    protected function validateRegistration(array $data): void
    {
        $rules = [
            'email' => 'required|email|unique:users,email',
            'username' => 'required|string|max:100|unique:users,username',
            'password' => 'required|string|min:8',
        ];

        validator($data, $rules)->validate();
    }
}

