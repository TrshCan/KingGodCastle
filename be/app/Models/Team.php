<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Team extends Model
{
    protected $table = 'teams';

    protected $fillable = [
        'user_id',
        'name',
        'slot1',
        'slot2',
        'slot3',
        'slot4',
        'slot5',
        'slot6',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function hero1(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot1');
    }

    public function hero2(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot2');
    }

    public function hero3(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot3');
    }

    public function hero4(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot4');
    }

    public function hero5(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot5');
    }

    public function hero6(): BelongsTo
    {
        return $this->belongsTo(UserHero::class, 'slot6');
    }

    public function relics(): BelongsToMany
    {
        return $this->belongsToMany(Sundry::class, 'team_relics', 'team_id', 'relic_id');
    }

    /**
     * Get all heroes in this team
     */
    public function getHeroesAttribute()
    {
        $heroes = [];
        foreach (['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'] as $slot) {
            if ($this->$slot) {
                $heroes[] = UserHero::find($this->$slot);
            }
        }
        return collect(array_filter($heroes));
    }
}

