<?php

namespace App\GraphQL\Resolvers;

use App\Services\UserHeroService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;

class UserHeroResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected UserHeroService $userHeroService
    ) {}

    public function myHeroes($root, array $args)
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

        // Find user by token
        $user = \App\Models\User::where('token', $token)->first();

        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userHeroService->getUserHeroes($user->id);
    }

    public function userHero($root, array $args)
    {
        return $this->userHeroService->getUserHero($args['id']);
    }

    public function acquireHero($root, array $args)
    {
        // Get token from Authorization header
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

        $user = \App\Models\User::where('token', $token)->first();

        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userHeroService->acquireHero($user->id, $args['heroId']);
    }

    public function addExperience($root, array $args)
    {
        // Get token from Authorization header
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

        $user = \App\Models\User::where('token', $token)->first();

        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userHeroService->addExperience(
            $args['userHeroId'],
            $args['xp']
        );
    }

    public function adminUserHeroes($root, array $args)
    {
        $this->authenticateAdmin();
        
        $userId = $args['userId'] ?? null;
        return $this->userHeroService->getAllUserHeroes($userId);
    }

    // Field resolvers for camelCase mapping
    public function userId($root)
    {
        return $root->user_id ?? $root->attributes['user_id'] ?? null;
    }

    public function heroId($root)
    {
        return $root->hero_id ?? $root->attributes['hero_id'] ?? null;
    }
}

