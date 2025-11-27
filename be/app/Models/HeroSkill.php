<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HeroSkill extends Model
{
    protected $table = 'hero_skills';

    protected $fillable = [
        'hero_id',
        'name',
        'description',
        'type',
        'icon',
    ];

    public function hero(): BelongsTo
    {
        return $this->belongsTo(Hero::class);
    }
}

