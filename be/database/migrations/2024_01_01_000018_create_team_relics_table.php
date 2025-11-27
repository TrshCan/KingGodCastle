<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('team_relics', function (Blueprint $table) {
            $table->foreignId('team_id')->constrained('teams')->cascadeOnDelete();
            $table->foreignId('relic_id')->constrained('sundries')->cascadeOnDelete();
            $table->primary(['team_id', 'relic_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('team_relics');
    }
};

