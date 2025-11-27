<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inventory extends Model
{
    protected $table = 'inventory';

    public $incrementing = false;
    // Note: Composite primary keys require custom handling in Laravel
    // Consider using a single auto-incrementing ID if needed

    protected $fillable = [
        'user_id',
        'item_id',
        'quantity',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Sundry::class, 'item_id');
    }
}

