<?php

namespace App\Repositories;

use App\Models\Sundry;
use App\Repositories\BaseRepository;

class SundryRepository extends BaseRepository
{
    public function __construct(Sundry $model)
    {
        parent::__construct($model);
    }

    public function getItemsByType(string $type)
    {
        return $this->model->where('type', $type)
            ->with('itemEffects')
            ->get();
    }

    public function getItemWithEffects(int $itemId): ?Sundry
    {
        return $this->model->with('itemEffects')->find($itemId);
    }
}

