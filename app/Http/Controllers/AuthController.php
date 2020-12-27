<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validation = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
        ]);

        $validation['password'] = bcrypt($request->password);

        $user = User::create($validation);

        $token = $user->createToken('authToken')->accessToken;

        return response(["success" => true, 'user' => $user, 'token' => $token]);
    }

    public function login(Request $request) {
        $validation = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(!auth()->attempt($validation)) {
            return response(["success" => false, "message" => 'Invalid Email or Password']);
        }

        $token = auth()->user()->createToken('authToken')->accessToken;


        return response(["success" => true, 'user' => auth()->user(), 'token' => $token]);
    }
}
