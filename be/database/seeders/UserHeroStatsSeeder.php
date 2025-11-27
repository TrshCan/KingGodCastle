<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserHeroStatsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('user_hero_stats')->insert([
            [
                'id' => 1,
                'user_hero_id' => 1,
                'ATK' => 40, 'Spell' => 100, 'ATK_SPEED' => 0.80, 'MP' => 140, 'HP' => 350,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 5, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 2,
                'user_hero_id' => 2,
                'ATK' => 60, 'Spell' => 20, 'ATK_SPEED' => 0.60, 'MP' => 70, 'HP' => 750,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 25, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 3,
                'user_hero_id' => 3,
                'ATK' => 90, 'Spell' => 30, 'ATK_SPEED' => 1.20, 'MP' => 90, 'HP' => 450,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 10, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 4,
                'user_hero_id' => 4,
                'ATK' => 80, 'Spell' => 70, 'ATK_SPEED' => 0.90, 'MP' => 110, 'HP' => 550,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 15, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 5,
                'user_hero_id' => 5,
                'ATK' => 100, 'Spell' => 10, 'ATK_SPEED' => 1.10, 'MP' => 80, 'HP' => 400,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 5, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 6,
                'user_hero_id' => 6,
                'ATK' => 40, 'Spell' => 100, 'ATK_SPEED' => 0.80, 'MP' => 140, 'HP' => 350,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 5, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 7,
                'user_hero_id' => 7,
                'ATK' => 60, 'Spell' => 20, 'ATK_SPEED' => 0.60, 'MP' => 70, 'HP' => 750,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 25, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
            [
                'id' => 8,
                'user_hero_id' => 8,
                'ATK' => 90, 'Spell' => 30, 'ATK_SPEED' => 1.20, 'MP' => 90, 'HP' => 450,
                'Damage_Dealt' => 1, 'Normal_Attack_Amplification' => 0.00, 'Skill_Amplification' => 0.00,
                'Special_Damage' => 1, 'Physical_CRIT_Damage' => 1.50, 'Spell_CRIT_Damage' => 1.50,
                'Physical_CRIT_Chance' => 0.00, 'Spell_CRIT_Chance' => 0.00,
                'Physical_DEF' => 0, 'Spell_DEF' => 0, 'Mighty_Block' => 10, 'Damage_Taken' => 1,
                'EVA' => 0.00, 'Outgoing_Healing' => 1, 'Guard' => 0,
                'Physical_HP_Drain' => 0.00, 'Spell_HP_Drain' => 0.00, 'Execution_Rate' => 0.00,
            ],
        ]);
    }
}

