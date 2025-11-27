<?php

namespace App\Services;

use App\Models\Hero;
use App\Repositories\HeroRepository;

class HeroService
{
    public function __construct(
        protected HeroRepository $heroRepository
    ) {}

    public function getAllHeroes()
    {
        return $this->heroRepository->getAllHeroesWithDetails();
    }

    public function getHero(int $heroId): Hero
    {
        $hero = $this->heroRepository->getHeroWithDetails($heroId);
        
        if (!$hero) {
            throw new \Exception("Hero not found", 404);
        }

        return $hero;
    }

    public function getHeroesByRegion(int $regionId)
    {
        return $this->heroRepository->getHeroesByRegion($regionId);
    }

    public function getHeroesByClass(int $classId)
    {
        return $this->heroRepository->getHeroesByClass($classId);
    }
}

