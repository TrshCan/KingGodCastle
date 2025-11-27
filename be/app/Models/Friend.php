<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Friend extends Model
{
    protected $table = 'friends';

    protected $fillable = [
        'user_id',
        'friend_id',
        'status',
    ];

    public $timestamps = false;
    const CREATED_AT = 'created_at';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function friend(): BelongsTo
    {
        return $this->belongsTo(User::class, 'friend_id');
    }
}

