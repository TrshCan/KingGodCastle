<?php

namespace App\GraphQL\Resolvers;

use App\Services\RegionService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;

class RegionResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected RegionService $regionService
    ) {}

    public function regions($root, array $args)
    {
        return $this->regionService->getAllRegions();
    }

    public function adminRegions($root, array $args)
    {
        $this->authenticateAdmin();
        return $this->regionService->getAllRegions();
    }
}

