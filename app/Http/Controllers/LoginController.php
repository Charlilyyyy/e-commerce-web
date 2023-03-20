<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    public function index(){
        return view('login');
    }

    public function register(Request $request){
        $user = new User;
        $user->name = $request->username;
        $user->password = $request->password;
        $user->save();
        return view('login');
    }
}
