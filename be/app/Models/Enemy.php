<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Enemy extends Model
{
    protected $table = 'enemies';

    protected $fillable = [
        'name',
        'region_id',
        'class_id',
        'title',
        'description',
        'icon',
    ];

    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function heroClass(): BelongsTo
    {
        return $this->belongsTo(HeroClass::class, 'class_id');
    }

    public function baseStats(): HasOne
    {
        return $this->hasOne(EnemyBaseStat::class);
    }

    public function skills(): HasMany
    {
        return $this->hasMany(EnemySkill::class);
    }
}

