<?php

namespace App\Services;

use App\Repositories\InventoryRepository;
use App\Repositories\SundryRepository;
use Illuminate\Support\Facades\DB;

class InventoryService
{
    public function __construct(
        protected InventoryRepository $inventoryRepository,
        protected SundryRepository $sundryRepository
    ) {}

    public function getUserInventory(int $userId)
    {
        return $this->inventoryRepository->getUserInventory($userId);
    }

    public function addItem(int $userId, int $itemId, int $quantity = 1)
    {
        // Verify item exists
        $item = $this->sundryRepository->findOrFail($itemId);

        return $this->inventoryRepository->addItem($userId, $itemId, $quantity);
    }

    public function removeItem(int $userId, int $itemId, int $quantity = 1): bool
    {
        $inventory = $this->inventoryRepository->getUserItem($userId, $itemId);
        
        if (!$inventory || $inventory->quantity < $quantity) {
            throw new \Exception("Insufficient item quantity", 400);
        }

        return $this->inventoryRepository->removeItem($userId, $itemId, $quantity);
    }

    public function useItem(int $userId, int $itemId, ?int $userHeroId = null)
    {
        $inventory = $this->inventoryRepository->getUserItem($userId, $itemId);
        
        if (!$inventory || $inventory->quantity < 1) {
            throw new \Exception("Item not available in inventory", 400);
        }

        $item = $this->sundryRepository->getItemWithEffects($itemId);
        
        // Apply item effects (implement based on item type)
        $this->applyItemEffects($item, $userHeroId);

        // Remove item from inventory
        return $this->inventoryRepository->removeItem($userId, $itemId, 1);
    }

    protected function applyItemEffects($item, ?int $userHeroId = null): void
    {
        // Implement item effect application logic
        // This would depend on your game mechanics
        foreach ($item->itemEffects as $effect) {
            // Apply effect based on modifier_type and stat_name
            // Example: increase HP, add XP, etc.
        }
    }
}

