<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hero_base_stats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hero_id')->constrained('heroes')->cascadeOnDelete();
            $table->integer('ATK')->default(0);
            $table->integer('Spell')->default(0);
            $table->decimal('ATK_SPEED', 5, 2)->default(1.00);
            $table->integer('MP')->default(0);
            $table->integer('HP')->default(0);
            $table->integer('Damage_Dealt')->default(0);
            $table->decimal('Normal_Attack_Amplification', 5, 2)->default(1.00);
            $table->decimal('Skill_Amplification', 5, 2)->default(1.00);
            $table->integer('Special_Damage')->default(0);
            $table->decimal('Physical_CRIT_Damage', 5, 2)->default(1.50);
            $table->decimal('Spell_CRIT_Damage', 5, 2)->default(1.50);
            $table->decimal('Physical_CRIT_Chance', 5, 2)->default(0.05);
            $table->decimal('Spell_CRIT_Chance', 5, 2)->default(0.05);
            $table->integer('Physical_DEF')->default(0);
            $table->integer('Spell_DEF')->default(0);
            $table->integer('Mighty_Block')->default(0);
            $table->integer('Damage_Taken')->default(0);
            $table->decimal('EVA', 5, 2)->default(0.05);
            $table->integer('Outgoing_Healing')->default(0);
            $table->integer('Guard')->default(0);
            $table->decimal('Physical_HP_Drain', 5, 2)->default(0.00);
            $table->decimal('Spell_HP_Drain', 5, 2)->default(0.00);
            $table->decimal('Execution_Rate', 5, 2)->default(0.00);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hero_base_stats');
    }
};

