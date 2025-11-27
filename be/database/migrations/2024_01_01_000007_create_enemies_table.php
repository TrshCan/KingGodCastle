<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enemies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->foreignId('region_id')->nullable()->constrained('regions')->nullOnDelete();
            $table->foreignId('class_id')->nullable()->constrained('classes')->nullOnDelete();
            $table->string('title', 100)->nullable();
            $table->text('description')->nullable();
            $table->string('icon', 100)->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enemies');
    }
};

