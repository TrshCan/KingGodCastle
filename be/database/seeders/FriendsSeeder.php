<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FriendsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('friends')->insert([
            [
                'id' => 1,
                'user_id' => 1,
                'friend_id' => 2,
                'created_at' => Carbon::parse('2025-05-25 09:01:34'),
                'status' => 'accepted',
            ],
            [
                'id' => 2,
                'user_id' => 2,
                'friend_id' => 1,
                'created_at' => Carbon::parse('2025-05-25 09:01:43'),
                'status' => 'accepted',
            ],
            [
                'id' => 3,
                'user_id' => 3,
                'friend_id' => 4,
                'created_at' => Carbon::parse('2025-05-25 09:02:00'),
                'status' => 'accepted',
            ],
            [
                'id' => 4,
                'user_id' => 4,
                'friend_id' => 3,
                'created_at' => Carbon::parse('2025-05-25 09:02:05'),
                'status' => 'accepted',
            ],
        ]);
    }
}

