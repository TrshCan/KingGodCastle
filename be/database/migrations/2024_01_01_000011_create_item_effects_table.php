<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('item_effects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id')->constrained('sundries')->cascadeOnDelete();
            $table->string('stat_name', 50);
            $table->enum('modifier_type', ['flat', 'percent', 'special'])->default('flat');
            $table->decimal('value', 6, 2);
            $table->text('note')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_effects');
    }
};

