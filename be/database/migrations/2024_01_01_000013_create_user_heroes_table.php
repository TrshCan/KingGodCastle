<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_heroes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('hero_id')->constrained('heroes')->cascadeOnDelete();
            $table->integer('level')->default(1);
            $table->integer('xp')->default(0);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_heroes');
    }
};

