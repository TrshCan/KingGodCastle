<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Sundry extends Model
{
    protected $table = 'sundries';

    protected $fillable = [
        'name',
        'type',
        'description',
        'icon',
    ];

    public function itemEffects(): HasMany
    {
        return $this->hasMany(ItemEffect::class, 'item_id');
    }

    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class, 'item_id');
    }

    public function userHeroAccessories(): BelongsToMany
    {
        return $this->belongsToMany(UserHero::class, 'user_hero_accessories', 'accessory_id', 'user_hero_id');
    }

    public function userHeroLegacies(): BelongsToMany
    {
        return $this->belongsToMany(UserHero::class, 'user_hero_legacies', 'legacy_id', 'user_hero_id');
    }

    public function teamRelics(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'team_relics', 'relic_id', 'team_id');
    }
}

