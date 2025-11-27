<?php

namespace App\GraphQL\Resolvers;

use App\Services\InventoryService;
use Illuminate\Support\Facades\Auth;

class InventoryResolver
{
    public function __construct(
        protected InventoryService $inventoryService
    ) {}

    public function myInventory($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->inventoryService->getUserInventory($user->id);
    }

    public function addItem($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->inventoryService->addItem(
            $user->id,
            $args['itemId'],
            $args['quantity'] ?? 1
        );
    }

    public function useItem($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->inventoryService->useItem(
            $user->id,
            $args['itemId'],
            $args['userHeroId'] ?? null
        );
    }
}

