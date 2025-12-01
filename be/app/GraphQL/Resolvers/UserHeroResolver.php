<?php

namespace App\GraphQL\Resolvers;

use App\Services\UserHeroService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;
use Illuminate\Support\Facades\Auth;

class UserHeroResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected UserHeroService $userHeroService
    ) {}

    public function myHeroes($root, array $args)
    {
        $user = Auth::user();
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
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->userHeroService->acquireHero($user->id, $args['heroId']);
    }

    public function addExperience($root, array $args)
    {
        $user = Auth::user();
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
}

