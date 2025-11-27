<?php

namespace App\GraphQL\Resolvers;

use App\Services\TeamService;
use Illuminate\Support\Facades\Auth;

class TeamResolver
{
    public function __construct(
        protected TeamService $teamService
    ) {}

    public function myTeams($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->teamService->getUserTeams($user->id);
    }

    public function team($root, array $args)
    {
        return $this->teamService->getTeam($args['id']);
    }

    public function createTeam($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->teamService->createTeam($user->id, $args);
    }

    public function updateTeam($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->teamService->updateTeam($args['id'], $user->id, $args);
    }

    public function deleteTeam($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        $this->teamService->deleteTeam($args['id'], $user->id);
        return ['success' => true];
    }
}

