<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemEffect extends Model
{
    protected $table = 'item_effects';

    protected $fillable = [
        'item_id',
        'stat_name',
        'modifier_type',
        'value',
        'note',
    ];

    protected function casts(): array
    {
        return [
            'value' => 'decimal:2',
        ];
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Sundry::class, 'item_id');
    }
}

