<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class XpAmount extends Model
{
    protected $table = 'xp_amounts';

    protected $fillable = [
        'type',
        'value',
    ];
}

