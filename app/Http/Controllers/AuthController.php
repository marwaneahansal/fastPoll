<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

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
        $cookie = $this->getCookieDetails($token);

        return response()->json(["success" => true, 'user' => $user])->cookie(
            $cookie['name'], $cookie['value'], $cookie['minutes'], $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly'], $cookie['samesite']
        );
    }

    public function login(Request $request) {
        $validation = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt($validation)) {
            $token = Auth::user()->createToken('authToken')->accessToken;
            $cookie = $this->getCookieDetails($token);
            
            return response()->json(["success" => true, 'user' => auth()->user()])->cookie(
                $cookie['name'], $cookie['value'], $cookie['minutes'], $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly'], $cookie['samesite']
            );
        }
        
        return response()->json(["success" => false, "message" => 'Invalid Email or Password']);
    }

    public function getLoggedInUser(Request $request) {
        return response()->json(['user' => $request->user('api')->token()]);
    }

    private function getCookieDetails($token)
    {
        return [
            'name' => '_token',
            'value' => $token,
            'minutes' => 60 * 60 * 24, // 1 hour
            'path' => null,
            'domain' => null,
            // 'secure' => true, // for production
            'secure' => null, // for localhost
            'httponly' => true,
            'samesite' => true,
        ];
    }


    public function logout(Request $request) {
        $request->user('api')->token()->revoke();
        $cookie = Cookie::forget('_token');
        return response()->json([
            "success" => true,
            "message" => "You're logout successfully"
        ])->withCookie($cookie);
    }
}
