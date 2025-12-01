<?php

namespace App\Services;

use App\Repositories\HeroClassRepository;

class HeroClassService
{
    public function __construct(
        protected HeroClassRepository $heroClassRepository
    ) {}

    public function getAllClasses()
    {
        return $this->heroClassRepository->getAllClasses();
    }
}

