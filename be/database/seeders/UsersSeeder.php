<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'email' => 'alice@example.com',
                'password' => Hash::make('securepassword123'),
                'username' => 'alice_wonder',
                'role' => 'user',
                'icon' => null,
            ],
            [
                'id' => 2,
                'email' => 'admin@email.com',
                'password' => '$2y$10$TTyBX9wXkCgrJRIY/8.1IOBSdwMlhbBpt5ZL8LJAS75aWHaLszQOW',
                'username' => 'bob_builder',
                'role' => 'user',
                'icon' => null,
            ],
            [
                'id' => 3,
                'email' => 'charlie@example.com',
                'password' => Hash::make('randompass789'),
                'username' => 'charlie_chap',
                'role' => 'user',
                'icon' => null,
            ],
            [
                'id' => 4,
                'email' => 'user@gmail.com',
                'password' => Hash::make('user123'),
                'username' => 'username 1',
                'role' => 'user',
                'icon' => null,
            ],
            [
                'id' => 5,
                'email' => 'admin@gmail.com',
                'password' => Hash::make('admin123'),
                'username' => 'admin',
                'role' => 'admin',
                'icon' => null,
            ],
            [
                'id' => 6,
                'email' => 'ng@gmail.com',
                'password' => '$2y$10$Naq6e32jtsUnRe/5ESjwfOiYESep8Wbmk9sMY4csJwXv3M8Q76XZe',
                'username' => 'ssksk',
                'role' => 'user',
                'icon' => null,
            ],
        ]);
    }
}

