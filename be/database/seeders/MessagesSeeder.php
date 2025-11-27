<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MessagesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('messages')->insert([
            [
                'id' => 1,
                'sender_id' => 1,
                'receiver_id' => 2,
                'content' => 'cxcxzc',
                'sent_at' => Carbon::parse('2025-05-02 02:17:10'),
            ],
            [
                'id' => 2,
                'sender_id' => 2,
                'receiver_id' => 1,
                'content' => 'xczxczxccdffdg',
                'sent_at' => Carbon::parse('2025-05-02 02:18:15'),
            ],
            [
                'id' => 3,
                'sender_id' => 1,
                'receiver_id' => 3,
                'content' => 'gffdg',
                'sent_at' => Carbon::parse('2025-05-02 02:18:45'),
            ],
            [
                'id' => 4,
                'sender_id' => 4,
                'receiver_id' => 1,
                'content' => 'fdfsdf',
                'sent_at' => Carbon::parse('2025-05-02 02:19:00'),
            ],
            [
                'id' => 5,
                'sender_id' => 3,
                'receiver_id' => 4,
                'content' => 'fdsfsdf',
                'sent_at' => Carbon::parse('2025-05-02 02:19:20'),
            ],
            [
                'id' => 6,
                'sender_id' => 2,
                'receiver_id' => 3,
                'content' => 'xin chao',
                'sent_at' => Carbon::parse('2025-05-02 02:19:40'),
            ],
            [
                'id' => 7,
                'sender_id' => 3,
                'receiver_id' => 2,
                'content' => 'chào nha',
                'sent_at' => Carbon::parse('2025-05-02 02:19:56'),
            ],
            [
                'id' => 8,
                'sender_id' => 5,
                'receiver_id' => 4,
                'content' => 'dsadsadas',
                'sent_at' => Carbon::parse('2025-05-25 08:24:03'),
            ],
            [
                'id' => 9,
                'sender_id' => 4,
                'receiver_id' => 5,
                'content' => 'dsdsad',
                'sent_at' => Carbon::parse('2025-05-25 08:24:11'),
            ],
            [
                'id' => 10,
                'sender_id' => 6,
                'receiver_id' => 4,
                'content' => 'dsadasd',
                'sent_at' => Carbon::parse('2025-05-25 08:25:40'),
            ],
            [
                'id' => 11,
                'sender_id' => 4,
                'receiver_id' => 6,
                'content' => 'sdsadsad123',
                'sent_at' => Carbon::parse('2025-05-25 08:25:50'),
            ],
            [
                'id' => 12,
                'sender_id' => 5,
                'receiver_id' => 6,
                'content' => 'dsadasdas',
                'sent_at' => Carbon::parse('2025-05-25 09:10:57'),
            ],
            [
                'id' => 13,
                'sender_id' => 6,
                'receiver_id' => 5,
                'content' => 'fdfdsfsdf',
                'sent_at' => Carbon::parse('2025-05-25 09:20:16'),
            ],
            [
                'id' => 14,
                'sender_id' => 1,
                'receiver_id' => 4,
                'content' => 'dsdasdasdas12312321312',
                'sent_at' => Carbon::parse('2025-05-25 09:36:43'),
            ],
            [
                'id' => 15,
                'sender_id' => 4,
                'receiver_id' => 1,
                'content' => 'sadsadasdasdasd',
                'sent_at' => Carbon::parse('2025-05-25 09:36:51'),
            ],
        ]);
    }
}

