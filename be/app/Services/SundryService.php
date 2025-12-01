<?php

namespace App\Services;

use App\Repositories\SundryRepository;

class SundryService
{
    public function __construct(
        protected SundryRepository $sundryRepository
    ) {}

    public function getAllItems(?string $type = null)
    {
        if ($type) {
            return $this->sundryRepository->getItemsByType($type);
        }
        
        return $this->sundryRepository->all();
    }

    public function getItemWithEffects(int $itemId)
    {
        return $this->sundryRepository->getItemWithEffects($itemId);
    }

    public function getAllItemsWithEffects(?string $type = null)
    {
        $items = $this->getAllItems($type);
        
        // Load item effects for all items
        return $items->load('itemEffects');
    }
}

