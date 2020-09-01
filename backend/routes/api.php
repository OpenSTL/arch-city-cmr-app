<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes(['verify' => true, 'register' => false]);

Route::group(['middleware' => 'auth:api'], function () {

    Route::get('/me', 'UserController@me');

    Route::post('/applicants/add', 'API\ApplicantController@store')->name('applicant.add');
    Route::post('/applicants/{applicant_id}/convictions','API\ConvictionController@add')->name('applicant.conviction.add');
    Route::get('/applicants/{applicant_id}/convictions','API\ConvictionController@indexByClient')->name('applicant.conviction.index_by_client');
    Route::post('/applicants/{applicant_id}/convictions/{conviction_id}/charges','API\ChargeController@add');
    Route::delete('/applicants/{applicant_id}', 'API\ApplicantController@destroy')->name('applicant.delete');

    Route::get('/applicants/v1.0.0','API\ApplicantController@index_v1_0_1')->name('applicant.conviction.index_v1_0_1');


    Route::get('/assignees/options','UserController@assignee_options')->name('assignees.options');
    Route::get('/status/options','API\StatusController@options')->name('status.options');

    Route::apiResource('applicants', 'API\ApplicantController');
    Route::apiResource('convictions', 'API\ConvictionController');
    Route::apiResource('charges', 'API\ChargeController');
    Route::apiResource('statuses', 'API\StatusController');
    Route::apiResource('assignments', 'API\StatusController');

});

