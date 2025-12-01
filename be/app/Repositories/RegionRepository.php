<?php

namespace App\Repositories;

use App\Models\Region;
use App\Repositories\BaseRepository;

class RegionRepository extends BaseRepository
{
    public function __construct(Region $model)
    {
        parent::__construct($model);
    }

    public function getAllRegions()
    {
        return $this->model->all();
    }

    public function getRegionWithHeroes(int $regionId): ?Region
    {
        return $this->model->with('heroes')->find($regionId);
    }

    public function getRegionWithEnemies(int $regionId): ?Region
    {
        return $this->model->with('enemies')->find($regionId);
    }
}

