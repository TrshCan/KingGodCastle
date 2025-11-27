<?php

namespace App\GraphQL\Resolvers;

use App\Services\HeroService;

class HeroResolver
{
    public function __construct(
        protected HeroService $heroService
    ) {}

    public function heroes($root, array $args)
    {
        return $this->heroService->getAllHeroes();
    }

    public function hero($root, array $args)
    {
        return $this->heroService->getHero($args['id']);
    }

    public function heroesByRegion($root, array $args)
    {
        return $this->heroService->getHeroesByRegion($args['regionId']);
    }

    public function heroesByClass($root, array $args)
    {
        return $this->heroService->getHeroesByClass($args['classId']);
    }
}

