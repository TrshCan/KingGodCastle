<?php

namespace App\Repositories;

use App\Models\Quest;
use App\Repositories\BaseRepository;

class QuestRepository extends BaseRepository
{
    public function __construct(Quest $model)
    {
        parent::__construct($model);
    }

    public function getDailyQuests()
    {
        return $this->model->where('type', 'daily')->get();
    }

    public function getWeeklyQuests()
    {
        return $this->model->where('type', 'weekly')->get();
    }

    public function getPendingQuests()
    {
        return $this->model->where('status', 'Pending')->get();
    }

    public function completeQuest(int $questId): bool
    {
        return $this->update($questId, ['status' => 'Completed']);
    }
}

