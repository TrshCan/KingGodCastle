<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enemy_skills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('enemy_id')->constrained('enemies')->cascadeOnDelete();
            $table->string('name', 100)->nullable();
            $table->text('description')->nullable();
            $table->enum('type', ['passive', 'awakening', 'ultimate'])->nullable();
            $table->string('icon', 100)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enemy_skills');
    }
};

