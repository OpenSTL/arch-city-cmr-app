<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddHoursWorkedToConvictionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('convictions', function (Blueprint $table) {
            $table->integer('hours_worked_on_case');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('convictions', function (Blueprint $table) {
            $table->dropColumn('hours_worked_on_case');
        });
    }
}
