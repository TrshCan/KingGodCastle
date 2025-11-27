<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MailsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('mails')->insert([
            [
                'id' => 1,
                'title' => 'Chào mừng bạn đến với hệ thống!',
                'content' => 'Chúng tôi rất vui vì bạn đã tham gia.',
                'sender_email' => 'admin@he-thong.com',
                'receiver_email' => 'user1@example.com',
                'received_at' => Carbon::parse('2025-04-20 02:05:42'),
            ],
            [
                'id' => 2,
                'title' => 'Xác nhận đăng ký',
                'content' => 'Vui lòng nhấn vào liên kết bên dưới để xác nhận đăng ký tài khoản của bạn.',
                'sender_email' => 'noreply@he-thong.com',
                'receiver_email' => 'user2@example.com',
                'received_at' => Carbon::parse('2025-04-20 02:05:42'),
            ],
            [
                'id' => 3,
                'title' => 'Khuyến mãi đặc biệt',
                'content' => 'Giảm giá 50% cho tất cả sản phẩm trong hôm nay!',
                'sender_email' => 'marketing@he-thong.com',
                'receiver_email' => 'user3@example.com',
                'received_at' => Carbon::parse('2025-04-20 02:05:42'),
            ],
            [
                'id' => 4,
                'title' => 'Thông báo bảo trì',
                'content' => 'Hệ thống sẽ bảo trì vào lúc 2 giờ sáng ngày mai.',
                'sender_email' => 'admin@he-thong.com',
                'receiver_email' => 'user4@example.com',
                'received_at' => Carbon::parse('2025-04-20 02:05:42'),
            ],
            [
                'id' => 5,
                'title' => 'Hướng dẫn sử dụng',
                'content' => 'Dưới đây là hướng dẫn sử dụng chi tiết cho người mới bắt đầu...',
                'sender_email' => 'support@he-thong.com',
                'receiver_email' => 'user5@example.com',
                'received_at' => Carbon::parse('2025-04-20 02:05:42'),
            ],
            [
                'id' => 6,
                'title' => 'test',
                'content' => 'test',
                'sender_email' => 'test',
                'receiver_email' => '',
                'received_at' => Carbon::parse('2025-05-18 08:52:35'),
            ],
        ]);
    }
}

