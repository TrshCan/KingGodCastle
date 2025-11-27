<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    protected $table = 'quests';

    protected $fillable = [
        'title',
        'description',
        'status',
        'type',
    ];

    public $timestamps = false;
    const CREATED_AT = 'created_at';
}

