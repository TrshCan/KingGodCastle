<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class QuestsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('quests')->insert([
            [
                'id' => 1,
                'title' => 'Đăng nhập mỗi ngày',
                'description' => 'Đăng nhập vào game ít nhất 1 lần trong ngày',
                'status' => 'Completed',
                'type' => 'daily',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 2,
                'title' => 'Hoàn thành 3 trận đấu',
                'description' => 'Chơi và hoàn thành 3 trận bất kỳ trong ngày',
                'status' => 'Pending',
                'type' => 'daily',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 3,
                'title' => 'Thu thập 5 vật phẩm',
                'description' => 'Nhặt đủ 5 vật phẩm trong bản đồ bất kỳ',
                'status' => 'Pending',
                'type' => 'daily',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 4,
                'title' => 'Giúp đỡ 1 người chơi',
                'description' => 'Gửi quà hoặc hỗ trợ người chơi khác 1 lần',
                'status' => 'Pending',
                'type' => 'daily',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 5,
                'title' => 'Đăng nhập 5 ngày liên tiếp',
                'description' => 'Mỗi ngày đăng nhập, tổng cộng 5 ngày trong tuần',
                'status' => 'Pending',
                'type' => 'weekly',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 6,
                'title' => 'Thắng 10 trận đấu',
                'description' => 'Chiến thắng tổng cộng 10 trận trong tuần',
                'status' => 'Pending',
                'type' => 'weekly',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 7,
                'title' => 'Nâng cấp vật phẩm 3 lần',
                'description' => 'Sử dụng hệ thống nâng cấp để nâng cấp vật phẩm 3 lần',
                'status' => 'Pending',
                'type' => 'weekly',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
            [
                'id' => 8,
                'title' => 'Tham gia chế độ đấu hạng',
                'description' => 'Tham gia ít nhất 3 trận trong chế độ đấu hạng',
                'status' => 'Pending',
                'type' => 'weekly',
                'created_at' => Carbon::parse('2025-05-25 15:40:14'),
            ],
        ]);
    }
}

