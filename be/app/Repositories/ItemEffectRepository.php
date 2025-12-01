<?php

namespace App\Repositories;

use App\Models\ItemEffect;
use App\Repositories\BaseRepository;

class ItemEffectRepository extends BaseRepository
{
    public function __construct(ItemEffect $model)
    {
        parent::__construct($model);
    }

    public function getItemEffectsByItemId(int $itemId)
    {
        return $this->model->where('item_id', $itemId)
            ->with('item')
            ->get();
    }

    public function getAllItemEffects()
    {
        return $this->model->with('item')->get();
    }
}

