<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EffectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $effectTypes = [
            'modify_stat_flat',
            'modify_stat_percent',
            'multiply_stat',
            'apply_buff',
            'damage_over_time',
            'heal',
            'life_steal',
            'amplify_damage',
            'execution',
            'crit_chance',
            'crit_damage',
            'shield',
            'modify_damage_taken',
            'status_effect',
            'summon',
            'trigger_skill',
        ];

        $effectParams = [
            'stat', 'value',
            'percent', 'multiplier',
            'duration', 'chance',
            'target', 'category',
            'base_damage', 'per_second',
            'percent_of_max_hp',
            'threshold_percent'
        ];

        foreach ($effectTypes as $type) {
            $effectId = DB::table('effects')->insertGetId([
                'name' => ucwords(str_replace('_', ' ', $type)),
                'type' => $type,
                'description' => 'Effect of type ' . $type,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Seed some dummy params for each effect type for demonstration
            // In a real scenario, these would be specific to the effect logic
            foreach ($effectParams as $param) {
                 DB::table('effects_params')->insert([
                    'effect_id' => $effectId,
                    'key' => $param,
                    'value' => null, // Default value, can be updated later
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
