<?php

namespace App\Services;

use App\Models\Quest;
use App\Repositories\QuestRepository;
use App\Repositories\UserRepository;
use App\Services\UserHeroService;

class QuestService
{
    public function __construct(
        protected QuestRepository $questRepository,
        protected UserRepository $userRepository,
        protected UserHeroService $userHeroService
    ) {}

    public function getDailyQuests()
    {
        return $this->questRepository->getDailyQuests();
    }

    public function getWeeklyQuests()
    {
        return $this->questRepository->getWeeklyQuests();
    }

    public function completeQuest(int $questId, int $userId): Quest
    {
        $quest = $this->questRepository->findOrFail($questId);

        if ($quest->status === 'Completed') {
            throw new \Exception("Quest already completed", 400);
        }

        // Mark quest as completed
        $this->questRepository->completeQuest($questId);

        // Award XP based on quest type
        $this->awardQuestRewards($quest, $userId);

        return $quest->fresh();
    }

    protected function awardQuestRewards(Quest $quest, int $userId): void
    {
        // Get XP amount for quest completion
        $xpAmount = \App\Models\XpAmount::where('type', 'complete_quest')->first();
        
        if ($xpAmount) {
            // Award XP to user's heroes (you can customize this logic)
            $userHeroes = $this->userRepository->findOrFail($userId)->userHeroes;
            foreach ($userHeroes as $userHero) {
                $this->userHeroService->addExperience($userHero->id, $xpAmount->value);
            }
        }
    }

    public function getAllQuests()
    {
        return $this->questRepository->getAllQuests();
    }
}

