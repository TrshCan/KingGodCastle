<?php

namespace App\Services;

use App\Models\UserHero;
use App\Models\LevelRequirement;
use App\Repositories\UserHeroRepository;
use App\Repositories\HeroRepository;
use Illuminate\Support\Facades\DB;

class UserHeroService
{
    public function __construct(
        protected UserHeroRepository $userHeroRepository,
        protected HeroRepository $heroRepository
    ) {}

    public function acquireHero(int $userId, int $heroId): UserHero
    {
        // Check if user already has this hero
        $existingHero = $this->userHeroRepository->getUserHeroByHeroId($userId, $heroId);
        if ($existingHero) {
            throw new \Exception("User already owns this hero", 400);
        }

        // Verify hero exists
        $hero = $this->heroRepository->findOrFail($heroId);

        // Create user hero with base stats
        $userHero = $this->userHeroRepository->create([
            'user_id' => $userId,
            'hero_id' => $heroId,
            'level' => 1,
            'xp' => 0,
        ]);

        // Create base stats from hero base stats
        $this->createUserHeroStats($userHero, $hero);

        return $this->userHeroRepository->getUserHeroWithDetails($userHero->id);
    }

    public function addExperience(int $userHeroId, int $xp): UserHero
    {
        $userHero = $this->userHeroRepository->findOrFail($userHeroId);
        $userHero->xp += $xp;

        // Check for level up
        $levelRequirement = LevelRequirement::find($userHero->level + 1);
        if ($levelRequirement && $userHero->xp >= $levelRequirement->xp_required) {
            $this->levelUp($userHero);
        } else {
            $userHero->save();
        }

        return $userHero->fresh();
    }

    public function levelUp(UserHero $userHero): UserHero
    {
        DB::transaction(function () use ($userHero) {
            $userHero->level += 1;
            $userHero->xp = 0;
            $userHero->save();

            // Update stats on level up (you can add stat growth logic here)
            if ($userHero->stats) {
                $this->updateStatsOnLevelUp($userHero);
            }
        });

        return $userHero->fresh();
    }

    public function getUserHeroes(int $userId)
    {
        return $this->userHeroRepository->getUserHeroes($userId);
    }

    public function getUserHero(int $userHeroId): UserHero
    {
        return $this->userHeroRepository->getUserHeroWithDetails($userHeroId);
    }

    protected function createUserHeroStats(UserHero $userHero, $hero): void
    {
        if ($hero->baseStats) {
            $userHero->stats()->create($hero->baseStats->toArray());
        }
    }

    protected function updateStatsOnLevelUp(UserHero $userHero): void
    {
        // Add stat growth logic here
        // For example: increase HP, ATK, etc. by a percentage
        $stats = $userHero->stats;
        if ($stats) {
            $stats->HP = (int)($stats->HP * 1.1);
            $stats->ATK = (int)($stats->ATK * 1.05);
            $stats->save();
        }
    }

    public function getAllUserHeroes(?int $userId = null)
    {
        return $this->userHeroRepository->getAllUserHeroes($userId);
    }
}

