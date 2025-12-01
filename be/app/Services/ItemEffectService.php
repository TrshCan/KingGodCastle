<?php

namespace App\Services;

use App\Repositories\ItemEffectRepository;
use App\Repositories\SundryRepository;

class ItemEffectService
{
    public function __construct(
        protected ItemEffectRepository $itemEffectRepository,
        protected SundryRepository $sundryRepository
    ) {}

    public function getAllItemEffects()
    {
        return $this->itemEffectRepository->getAllItemEffects();
    }

    public function getItemEffectsByItemId(int $itemId)
    {
        // Verify item exists
        $this->sundryRepository->findOrFail($itemId);
        
        return $this->itemEffectRepository->getItemEffectsByItemId($itemId);
    }
}

