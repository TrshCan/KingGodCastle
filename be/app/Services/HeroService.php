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

    public function createHero(array $data): Hero
    {
        // Validate required fields
        if (empty($data['name']) || empty($data['region_id']) || empty($data['class_id'])) {
            throw new \Exception("Name, region_id, and class_id are required", 400);
        }

        return $this->heroRepository->createHero($data);
    }

    public function updateHero(int $heroId, array $data): Hero
    {
        $hero = $this->heroRepository->findOrFail($heroId);
        $this->heroRepository->updateHero($heroId, $data);
        /** @var Hero $updatedHero */
        $updatedHero = $this->heroRepository->getHeroWithDetails($heroId);
        return $updatedHero;
    }

    public function deleteHero(int $heroId): bool
    {
        $hero = $this->heroRepository->findOrFail($heroId);
        return $this->heroRepository->deleteHero($heroId);
    }
}

