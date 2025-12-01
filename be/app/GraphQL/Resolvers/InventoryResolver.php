<?php

namespace App\GraphQL\Resolvers;

use App\Services\InventoryService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;
use Illuminate\Support\Facades\Auth;

class InventoryResolver
{
    use AuthenticatesAdmin;

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

        $this->inventoryService->useItem(
            $user->id,
            $args['itemId'],
            $args['userHeroId'] ?? null
        );
        
        return ['success' => true];
    }

    public function adminInventories($root, array $args)
    {
        $this->authenticateAdmin();
        
        $userId = $args['userId'] ?? null;
        return $this->inventoryService->getAllInventories($userId);
    }
}

