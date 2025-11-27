<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_hero_accessories', function (Blueprint $table) {
            $table->foreignId('user_hero_id')->constrained('user_heroes')->cascadeOnDelete();
            $table->foreignId('accessory_id')->constrained('sundries')->cascadeOnDelete();
            $table->primary(['user_hero_id', 'accessory_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_hero_accessories');
    }
};

