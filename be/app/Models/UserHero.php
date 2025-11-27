<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class UserHero extends Model
{
    protected $table = 'user_heroes';

    protected $fillable = [
        'user_id',
        'hero_id',
        'level',
        'xp',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function hero(): BelongsTo
    {
        return $this->belongsTo(Hero::class);
    }

    public function stats(): HasOne
    {
        return $this->hasOne(UserHeroStat::class);
    }

    public function accessories(): BelongsToMany
    {
        return $this->belongsToMany(Sundry::class, 'user_hero_accessories', 'user_hero_id', 'accessory_id');
    }

    public function legacies(): BelongsToMany
    {
        return $this->belongsToMany(Sundry::class, 'user_hero_legacies', 'user_hero_id', 'legacy_id');
    }

    // Note: Teams relationship is complex due to multiple slot columns
    // Use direct queries or accessor methods instead
    public function getTeamsAttribute()
    {
        return Team::where('slot1', $this->id)
            ->orWhere('slot2', $this->id)
            ->orWhere('slot3', $this->id)
            ->orWhere('slot4', $this->id)
            ->orWhere('slot5', $this->id)
            ->orWhere('slot6', $this->id)
            ->get();
    }
}

