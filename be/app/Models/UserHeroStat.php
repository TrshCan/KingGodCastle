<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserHeroStat extends Model
{
    protected $table = 'user_hero_stats';

    protected $fillable = [
        'user_hero_id',
        'ATK',
        'Spell',
        'ATK_SPEED',
        'MP',
        'HP',
        'Damage_Dealt',
        'Normal_Attack_Amplification',
        'Skill_Amplification',
        'Special_Damage',
        'Physical_CRIT_Damage',
        'Spell_CRIT_Damage',
        'Physical_CRIT_Chance',
        'Spell_CRIT_Chance',
        'Physical_DEF',
        'Spell_DEF',
        'Mighty_Block',
        'Damage_Taken',
        'EVA',
        'Outgoing_Healing',
        'Guard',
        'Physical_HP_Drain',
        'Spell_HP_Drain',
        'Execution_Rate',
    ];

    protected function casts(): array
    {
        return [
            'ATK_SPEED' => 'decimal:2',
            'Normal_Attack_Amplification' => 'decimal:2',
            'Skill_Amplification' => 'decimal:2',
            'Physical_CRIT_Damage' => 'decimal:2',
            'Spell_CRIT_Damage' => 'decimal:2',
            'Physical_CRIT_Chance' => 'decimal:2',
            'Spell_CRIT_Chance' => 'decimal:2',
            'EVA' => 'decimal:2',
            'Physical_HP_Drain' => 'decimal:2',
            'Spell_HP_Drain' => 'decimal:2',
            'Execution_Rate' => 'decimal:2',
        ];
    }

    public function userHero(): BelongsTo
    {
        return $this->belongsTo(UserHero::class);
    }
}

