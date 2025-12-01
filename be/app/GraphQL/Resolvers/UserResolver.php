<?php

namespace App\GraphQL\Resolvers;

use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class UserResolver
{
    public function __construct(
        protected UserService $userService
    ) {}

    public function me($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userService->getUserProfile($user->id);
    }

    public function users($root, array $args)
    {
        // Get token from Authorization header
        $authHeader = request()->header('Authorization');
        
        if (!$authHeader) {
            throw new \Exception("Unauthenticated", 401);
        }

        // Extract token from "Bearer {token}" format
        $token = null;
        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            $token = $matches[1];
        }

        if (!$token) {
            throw new \Exception("Unauthenticated", 401);
        }

        // Find user by token in database
        $user = $this->userService->authenticateByToken($token);

        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        // Check if user is admin
        if ($user->role !== 'admin') {
            throw new \Exception("Unauthorized", 403);
        }

        return $this->userService->getAllUsers();
    }

    public function register($root, array $args)
    {
        return $this->userService->register($args);
    }

    public function login($root, array $args)
    {
        $user = $this->userService->authenticate($args['email'], $args['password']);
        
        // Create token (if using Laravel Sanctum/Passport)
        // $token = $user->createToken('auth-token')->plainTextToken;
        
        return [
            'user' => $user,
            'token' => $user->token,
        ];
    }

    public function loginWithGoogle($root, array $args)
    {
        $user = $this->userService->loginWithGoogle($args['token']);
        
        return [
            'user' => $user,
            'token' => $user->token,
        ];
    }

    public function updateProfile($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userService->updateProfile($user->id, $args);
    }
}

