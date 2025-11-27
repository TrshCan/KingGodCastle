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

