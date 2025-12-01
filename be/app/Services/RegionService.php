<?php

namespace App\Services;

use App\Repositories\RegionRepository;

class RegionService
{
    public function __construct(
        protected RegionRepository $regionRepository
    ) {}

    public function getAllRegions()
    {
        return $this->regionRepository->getAllRegions();
    }

    public function getRegionWithHeroes(int $regionId)
    {
        return $this->regionRepository->getRegionWithHeroes($regionId);
    }

    public function getRegionWithEnemies(int $regionId)
    {
        return $this->regionRepository->getRegionWithEnemies($regionId);
    }
}

