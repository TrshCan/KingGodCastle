<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('heroes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->foreignId('region_id')->nullable()->constrained('regions')->nullOnDelete();
            $table->foreignId('class_id')->nullable()->constrained('classes')->nullOnDelete();
            $table->string('title', 100)->nullable();
            $table->text('description')->nullable();
            $table->enum('rarity', ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic', 'unique'])->default('common');
            $table->string('icon', 100)->nullable();
            $table->string('illustration', 100)->nullable();
            $table->string('card', 255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('heroes');
    }
};

