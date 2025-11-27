<?php

namespace App\Repositories;

use App\Models\Team;
use App\Repositories\BaseRepository;

class TeamRepository extends BaseRepository
{
    public function __construct(Team $model)
    {
        parent::__construct($model);
    }

    public function getUserTeams(int $userId)
    {
        return $this->model->where('user_id', $userId)
            ->with(['hero1', 'hero2', 'hero3', 'hero4', 'hero5', 'hero6', 'relics'])
            ->get();
    }

    public function getTeamWithDetails(int $teamId): ?Team
    {
        return $this->model->with([
            'user',
            'hero1.hero', 'hero1.stats',
            'hero2.hero', 'hero2.stats',
            'hero3.hero', 'hero3.stats',
            'hero4.hero', 'hero4.stats',
            'hero5.hero', 'hero5.stats',
            'hero6.hero', 'hero6.stats',
            'relics'
        ])->find($teamId);
    }

    public function updateTeamSlots(int $teamId, array $slots): bool
    {
        $team = $this->findOrFail($teamId);
        foreach ($slots as $slot => $userHeroId) {
            if (in_array($slot, ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'])) {
                $team->$slot = $userHeroId;
            }
        }
        return $team->save();
    }
}

