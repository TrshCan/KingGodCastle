<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('google_id')->nullable()->unique()->after('password');
            $table->string('avatar')->nullable()->after('icon');
            $table->string('provider')->nullable()->after('google_id'); // 'google', 'local', etc.
            $table->timestamp('email_verified_at')->nullable()->after('email');
        });

        // Make password nullable for OAuth users
        Schema::table('users', function (Blueprint $table) {
            $table->string('password', 255)->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['google_id', 'avatar', 'provider', 'email_verified_at']);
        });
    }
};
