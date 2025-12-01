<?php

namespace App\Repositories;

use App\Models\Inventory;
use App\Repositories\BaseRepository;

class InventoryRepository extends BaseRepository
{
    public function __construct(Inventory $model)
    {
        parent::__construct($model);
    }

    public function getUserInventory(int $userId)
    {
        return $this->model->where('user_id', $userId)
            ->with('item.itemEffects')
            ->get();
    }

    public function getUserItem(int $userId, int $itemId): ?Inventory
    {
        return $this->model->where('user_id', $userId)
            ->where('item_id', $itemId)
            ->first();
    }

    public function addItem(int $userId, int $itemId, int $quantity = 1): Inventory
    {
        $inventory = $this->getUserItem($userId, $itemId);
        
        if ($inventory) {
            $inventory->quantity += $quantity;
            $inventory->save();
            return $inventory;
        }

        return $this->create([
            'user_id' => $userId,
            'item_id' => $itemId,
            'quantity' => $quantity,
        ]);
    }

    public function removeItem(int $userId, int $itemId, int $quantity = 1): bool
    {
        $inventory = $this->getUserItem($userId, $itemId);
        
        if (!$inventory) {
            return false;
        }

        if ($inventory->quantity <= $quantity) {
            return $inventory->delete();
        }

        $inventory->quantity -= $quantity;
        return $inventory->save();
    }

    public function getAllInventories(?int $userId = null)
    {
        $query = $this->model->with(['user', 'item']);
        
        if ($userId) {
            $query->where('user_id', $userId);
        }
        
        return $query->get();
    }
}

