<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LevelRequirement extends Model
{
    protected $table = 'level_requirements';

    public $incrementing = false;
    protected $primaryKey = 'level';

    protected $fillable = [
        'level',
        'xp_required',
    ];
}

