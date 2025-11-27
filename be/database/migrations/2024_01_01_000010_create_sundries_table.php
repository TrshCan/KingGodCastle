<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sundries', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->nullable();
            $table->enum('type', [
                'consumable',
                'armor',
                'weapon',
                'ammo',
                'food',
                'ingredient',
                'material',
                'relic',
                'accessory',
                'legacy',
                'currency'
            ])->nullable();
            $table->text('description')->nullable();
            $table->string('icon', 100)->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sundries');
    }
};

