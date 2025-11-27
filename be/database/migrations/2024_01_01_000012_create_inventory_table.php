<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventory', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('item_id')->constrained('sundries')->cascadeOnDelete();
            $table->integer('quantity')->default(0);
            $table->primary(['user_id', 'item_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory');
    }
};

