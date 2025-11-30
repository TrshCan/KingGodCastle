<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_hero_legacies', function (Blueprint $table) {
            $table->foreignId('user_hero_id')->constrained('user_heroes')->cascadeOnDelete();
            $table->foreignId('legacy_id')->constrained('sundries')->cascadeOnDelete();
            $table->primary(['user_hero_id', 'legacy_id']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_hero_legacies');
    }
};

