<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('name', 100)->nullable();
            $table->foreignId('slot1')->nullable()->constrained('user_heroes')->nullOnDelete();
            $table->foreignId('slot2')->nullable()->constrained('user_heroes')->nullOnDelete();
            $table->foreignId('slot3')->nullable()->constrained('user_heroes')->nullOnDelete();
            $table->foreignId('slot4')->nullable()->constrained('user_heroes')->nullOnDelete();
            $table->foreignId('slot5')->nullable()->constrained('user_heroes')->nullOnDelete();
            $table->foreignId('slot6')->nullable()->constrained('user_heroes')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};

