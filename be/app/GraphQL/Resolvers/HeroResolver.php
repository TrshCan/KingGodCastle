<?php

namespace App\GraphQL\Resolvers;

use App\Services\HeroService;
use App\Services\HeroClassService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;

class HeroResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected HeroService $heroService,
        protected HeroClassService $heroClassService
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

    public function heroClasses($root, array $args)
    {
        return $this->heroClassService->getAllClasses();
    }

    // Admin Mutations
    public function createHero($root, array $args)
    {
        $this->authenticateAdmin();
        
        $input = $args['input'];
        $data = [
            'name' => $input['name'],
            'region_id' => $input['regionId'],
            'class_id' => $input['classId'],
            'title' => $input['title'] ?? null,
            'description' => $input['description'] ?? null,
            'icon' => $input['icon'] ?? null,
            'illustration' => $input['illustration'] ?? null,
            'card' => $input['card'] ?? null,
        ];
        
        return $this->heroService->createHero($data);
    }

    public function updateHero($root, array $args)
    {
        $this->authenticateAdmin();
        
        $input = $args['input'];
        $data = [];
        
        if (isset($input['name'])) $data['name'] = $input['name'];
        if (isset($input['regionId'])) $data['region_id'] = $input['regionId'];
        if (isset($input['classId'])) $data['class_id'] = $input['classId'];
        if (isset($input['title'])) $data['title'] = $input['title'];
        if (isset($input['description'])) $data['description'] = $input['description'];
        if (isset($input['icon'])) $data['icon'] = $input['icon'];
        if (isset($input['illustration'])) $data['illustration'] = $input['illustration'];
        if (isset($input['card'])) $data['card'] = $input['card'];
        
        return $this->heroService->updateHero($args['id'], $data);
    }

    public function deleteHero($root, array $args)
    {
        $this->authenticateAdmin();
        
        $this->heroService->deleteHero($args['id']);
        return ['success' => true];
    }
}

