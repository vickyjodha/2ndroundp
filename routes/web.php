<?php

use App\Http\Controllers\UserLoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','App\Http\Controllers\FrontController@home');

Auth::routes();
Route::middleware(['auth'])->group(function () {
    Route::get('/home',function(){
    return   redirect()->route('dashboard');
    });
    Route::get('dashboard',function(){
        return view('admin.dashboard');
        })->name('dashboard');
    Route::get('product','App\Http\Controllers\FrontController@index')->name('user.product.index');
    Route::get('product-import','App\Http\Controllers\FrontController@show')->name('user.product.import');
    Route::post('product-import-upload','App\Http\Controllers\FrontController@import')->name('user.product.store');
    Route::get('product-export','App\Http\Controllers\FrontController@export')->name('user.product.export');
});
Route::group([
    'middleware'=>'admin',
    'prefix' => 'admin',
    'namespace' => 'App\Http\Controllers\Admin'
],function () {
        Route::resource('banner','BannerController');
        Route::get('product-import','ProductController@show')->name('product.import');
        Route::post('product-import-upload','ProductController@import')->name('product.store');
        Route::get('product-export','ProductController@export')->name('product.export');
        Route::get('product','App\Http\Controllers\Admin\ProductController@index')->name('product.index');

});
Route::get('admin/login','App\Http\Controllers\UserLoginController@index')->name('admin.login');
Route::post('admin/check','App\Http\Controllers\UserLoginController@login')->name('admin.logincheck');
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
