<?php

namespace App\GraphQL\Resolvers;

use App\Services\QuestService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;
use Illuminate\Support\Facades\Auth;

class QuestResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected QuestService $questService
    ) {}

    public function dailyQuests($root, array $args)
    {
        return $this->questService->getDailyQuests();
    }

    public function weeklyQuests($root, array $args)
    {
        return $this->questService->getWeeklyQuests();
    }

    public function completeQuest($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->questService->completeQuest($args['id'], $user->id);
    }

    public function adminQuests($root, array $args)
    {
        $this->authenticateAdmin();
        return $this->questService->getAllQuests();
    }
}

