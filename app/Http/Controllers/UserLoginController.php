<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;
class UserLoginController extends Controller
{
    public function index(){
        return view('auth.loginadmin');
    }
    public function login(UserLoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            if(Auth::user()->type!="admin"){
                Auth::logout();
                return redirect()->intended('login')
                ->withSuccess('Oppes! You have entered invalid credentials');
            }
            return redirect()->intended('dashboard')
                        ->withSuccess('You have Successfully loggedin');
        }

        return redirect("login")->withSuccess('Oppes! You have entered invalid credentials');
    }


    public function logout() {
        Session::flush();
        Auth::logout();

        return Redirect('login');
    }
}
