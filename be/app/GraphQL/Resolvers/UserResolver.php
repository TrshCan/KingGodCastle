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
            // 'token' => $token,
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

