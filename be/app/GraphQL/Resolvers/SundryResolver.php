<?php

namespace App\GraphQL\Resolvers;

use App\Services\SundryService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;

class SundryResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected SundryService $sundryService
    ) {}

    public function adminItems($root, array $args)
    {
        $this->authenticateAdmin();
        
        $type = $args['type'] ?? null;
        return $this->sundryService->getAllItemsWithEffects($type);
    }
}

