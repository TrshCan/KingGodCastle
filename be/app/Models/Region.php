<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Region extends Model
{
    protected $table = 'regions';

    protected $fillable = [
        'name',
        'description',
        'icon',
    ];

    public function heroes(): HasMany
    {
        return $this->hasMany(Hero::class);
    }

    public function enemies(): HasMany
    {
        return $this->hasMany(Enemy::class);
    }
}

