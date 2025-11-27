<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HeroClass extends Model
{
    protected $table = 'classes';

    protected $fillable = [
        'name',
        'description',
        'icon',
    ];

    public function heroes(): HasMany
    {
        return $this->hasMany(Hero::class, 'class_id');
    }

    public function enemies(): HasMany
    {
        return $this->hasMany(Enemy::class, 'class_id');
    }
}

