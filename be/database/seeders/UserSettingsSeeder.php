<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSettingsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('user_settings')->insert([
            // User 1 preferences
            ['id' => 1, 'user_id' => 1, 'setting_id' => 1], // language: en
            ['id' => 2, 'user_id' => 1, 'setting_id' => 2], // notifications enabled

            // User 2 preferences
            ['id' => 3, 'user_id' => 2, 'setting_id' => 1],
            ['id' => 4, 'user_id' => 2, 'setting_id' => 3], // theme: light

            // User 3 preferences
            ['id' => 5, 'user_id' => 3, 'setting_id' => 1],
            ['id' => 6, 'user_id' => 3, 'setting_id' => 2],
            ['id' => 7, 'user_id' => 3, 'setting_id' => 4], // email marketing off
        ]);
    }
}
