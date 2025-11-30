<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('settings')->insert([
            ['id' => 1, 'key' => 'language', 'value' => 'en'],
            ['id' => 2, 'key' => 'notifications_enabled', 'value' => '1'],
            ['id' => 3, 'key' => 'theme', 'value' => 'light'],
            ['id' => 4, 'key' => 'email_marketing', 'value' => '0'],
        ]);
    }
}
