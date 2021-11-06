<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PagesController;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/{any?}',[PagesController::class, 'view'])->where('any', '.*');
