<?php

namespace App\GraphQL\Resolvers\Traits;

use App\Models\User;

trait AuthenticatesAdmin
{
    /**
     * Authenticate admin user by token
     */
    protected function authenticateAdmin(): User
    {
        $authHeader = request()->header('Authorization');
        
        if (!$authHeader) {
            throw new \Exception("Unauthenticated", 401);
        }

        $token = null;
        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            $token = $matches[1];
        }

        if (!$token) {
            throw new \Exception("Unauthenticated", 401);
        }

        $user = User::where('token', $token)->first();

        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        if ($user->role !== 'admin') {
            throw new \Exception("Unauthorized", 403);
        }

        return $user;
    }
}

