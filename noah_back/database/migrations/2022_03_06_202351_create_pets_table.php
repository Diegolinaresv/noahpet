<?php

use App\Models\Pet;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('gender', [Pet::GENDER_MALE, Pet::GENDER_FEMALE]);
            $table->enum('type', [Pet::TYPE_DOG, Pet::TYPE_CAT, Pet::TYPE_OTHER]);
            $table->integer('age');
            $table->enum('sterilized', [Pet::IS_STERILIZED_F, Pet::IS_STERILIZED_M, Pet::IS_NOT_STERILIZED_F, Pet::IS_NOT_STERILIZED_M]);
            $table->date('birthday');
            $table->double('weight');
            $table->foreignId('breed_id')->constrained();
            $table->foreignId('texture_id')->constrained();
            $table->double('ideal_weight');
            $table->foreignId('activity_level_id')->constrained();
            $table->string('eat_style');
            $table->string('food_type');
            $table->string('food_branch');
            $table->integer('n_feed_times');
            $table->foreignId('snacking_id')->constrained();
            $table->foreignId('diet_id')->constrained()->nullable();
            $table->boolean('has_medical_condition')->default(false);
            $table->unsignedBigInteger('principal_medical_condition_id')->nullable();
            $table->foreign('principal_medical_condition_id')->references('id')->on('diets');
            $table->string('principal_medical_sympton')->default('');
            $table->boolean('has_secondary_medical_condition')->default(false);
            $table->unsignedBigInteger('secondary_medical_condition_id')->nullable();
            $table->foreign('secondary_medical_condition_id')->references('id')->on('diets');
            $table->string('secondary_medical_sympton')->default('');
            $table->foreignId('client_id')->constrained();
            $table->enum('status', [Pet::STATUS_DONE, Pet::STATUS_PENDING])->default(Pet::STATUS_PENDING);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pets');
    }
}
