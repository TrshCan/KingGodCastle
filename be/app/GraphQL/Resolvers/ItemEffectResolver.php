<?php

namespace App\GraphQL\Resolvers;

use App\Services\ItemEffectService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;

class ItemEffectResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected ItemEffectService $itemEffectService
    ) {}

    public function adminItemEffects($root, array $args)
    {
        $this->authenticateAdmin();
        
        $itemId = $args['itemId'] ?? null;
        
        if ($itemId) {
            return $this->itemEffectService->getItemEffectsByItemId($itemId);
        }
        
        return $this->itemEffectService->getAllItemEffects();
    }
}

