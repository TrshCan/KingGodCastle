<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EnemySkill extends Model
{
    protected $table = 'enemy_skills';

    protected $fillable = [
        'enemy_id',
        'name',
        'description',
        'type',
        'icon',
    ];

    public function enemy(): BelongsTo
    {
        return $this->belongsTo(Enemy::class);
    }
}

