<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;


Route::get('/',[HomeController::class,'index']);
Route::get('/login',[LoginController::class,'index']);
Route::post('/register',[LoginController::class,'regsiter']);