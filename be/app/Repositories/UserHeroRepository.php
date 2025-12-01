<?php

namespace App\Repositories;

use App\Models\UserHero;
use App\Repositories\BaseRepository;

class UserHeroRepository extends BaseRepository
{
    public function __construct(UserHero $model)
    {
        parent::__construct($model);
    }

    public function getUserHeroes(int $userId)
    {
        return $this->model->where('user_id', $userId)
            ->with(['hero.region', 'hero.heroClass', 'hero.baseStats', 'stats', 'accessories', 'legacies'])
            ->get();
    }

    public function getUserHeroWithDetails(int $userHeroId): ?UserHero
    {
        return $this->model->with(['user', 'hero.region', 'hero.heroClass', 'hero.baseStats', 'hero.skills', 'stats', 'accessories', 'legacies'])->find($userHeroId);
    }

    public function getUserHeroByHeroId(int $userId, int $heroId): ?UserHero
    {
        return $this->model->where('user_id', $userId)
            ->where('hero_id', $heroId)
            ->first();
    }

    public function addXp(int $userHeroId, int $xp): bool
    {
        $userHero = $this->findOrFail($userHeroId);
        $userHero->xp += $xp;
        return $userHero->save();
    }

    public function levelUp(int $userHeroId): bool
    {
        $userHero = $this->findOrFail($userHeroId);
        $userHero->level += 1;
        $userHero->xp = 0;
        return $userHero->save();
    }

    public function getAllUserHeroes(?int $userId = null)
    {
        $query = $this->model->with(['user', 'hero', 'stats']);
        
        if ($userId) {
            $query->where('user_id', $userId);
        }
        
        return $query->get();
    }
}

