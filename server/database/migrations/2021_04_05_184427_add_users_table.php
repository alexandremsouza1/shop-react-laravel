<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('domain')->nullable();
            $table->string('subdomain')->nullable();
            $table->string('logo')->nullable();
            $table->string('social_media')->nullable();
            $table->string('id_social_media')->nullable();
            $table->string('social_media_pixel')->nullable();
            $table->string('google_analytics')->nullable();
            $table->string('whatsapp_number')->nullable();
            $table->string('email_contact')->nullable();
            $table->string('site_title')->nullable();
            $table->longText('site_keywords')->nullable();
            $table->longText('site_description')->nullable();
            $table->tinyInteger('plan_id')->nullable();
            $table->dateTime('next_expiration')->nullable();
            $table->dateTime('disable_account')->nullable();
            $table->dateTime('delete_account')->nullable();
            $table->tinyInteger('status')->nullable()->default(1);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
           //
        });
    }
}
