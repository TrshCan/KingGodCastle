<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConditionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $conditions = [
            "self_hp_below",
            "self_hp_below_percent",
            "self_hp_above",
            "self_hp_above_percent",

            "target_hp_below",
            "target_hp_below_percent",
            "target_hp_above",
            "target_hp_above_percent",

            "self_mp_below",
            "self_mp_above",
            "self_mp_below_percent",
            "self_mp_above_percent",

            "attack_type",
            
            "on_hit",
            "on_crit",
            "on_kill",
            "on_damage_taken",
            "on_damage_dealt",

            "on_hit_type",
            "damage_type",
            "on_kill_type",

            "after_seconds",
            "interval_seconds",

            "self_has_status",
            "target_has_status",

            "target_type",

            "after_using_skill_id",
            "after_hit_count",

            "chance_bonus_percent",
            
            // Complex conditions like comparison are handled by logic, 
            // but we can seed the keys if needed. 
            // For now, seeding the keys as requested.
            "comparison_left",
            "comparison_operator",
            "comparison_right",
        ];

        foreach ($conditions as $key) {
            DB::table('conditions')->insert([
                'effect_id' => null, // Conditions can exist independently or be linked to effects later
                'key' => $key,
                'description' => 'Condition: ' . str_replace('_', ' ', $key),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
