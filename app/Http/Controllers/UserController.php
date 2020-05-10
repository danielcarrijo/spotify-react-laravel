<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Validator;
use Illuminate\Http\Request;


class UserController extends Controller
{
    protected function generateAccessToken($user)
    {
        $token = $user->createToken('spotify');

        return $token->accessToken;
    }


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required|min:6'
        ]);


        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }

    public function login(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $status = 200;
            $response = [
                'user' => Auth::user(),
                'token' => Auth::user()->createToken('spotify')->accessToken,
            ];
        }
        return response()->json($response, $status);
    }
    public function logout() {
        if(Auth::check()) {
            $user = Auth::user()->token();
            $user->revoke();
            return response()->json("logged out",200);
        }
        return response()->json("Nem tava logado",200);
        
    }
}

