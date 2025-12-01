<?php

namespace App\Repositories;

use App\Models\Hero;
use App\Repositories\BaseRepository;

class HeroRepository extends BaseRepository
{
    public function __construct(Hero $model)
    {
        parent::__construct($model);
    }

    public function getHeroWithDetails(int $heroId): ?Hero
    {
        return $this->model->with(['region', 'heroClass', 'baseStats', 'skills'])->find($heroId);
    }

    public function getHeroesByRegion(int $regionId)
    {
        return $this->model->where('region_id', $regionId)->with(['heroClass', 'baseStats'])->get();
    }

    public function getHeroesByClass(int $classId)
    {
        return $this->model->where('class_id', $classId)->with(['region', 'baseStats'])->get();
    }

    public function getAllHeroesWithDetails()
    {
        return $this->model->with(['region', 'heroClass', 'baseStats', 'skills', 'userHeroes'])->get();
    }

    public function createHero(array $data): Hero
    {
        return $this->create($data);
    }

    public function updateHero(int $heroId, array $data): bool
    {
        return $this->update($heroId, $data);
    }

    public function deleteHero(int $heroId): bool
    {
        return $this->delete($heroId);
    }
}

