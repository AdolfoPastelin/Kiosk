<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function register(RegisterRequest $request) {
        // Validate the register
        $data = $request->validated();

        // Create the user
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        // Return a response
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function login(LoginRequest $request) {
        $data = $request->validated();

        // Check password
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['The email or the password is incorrect']
            ], 422);
        }

        // Authenticate the user
        $user = Auth::user();

        // Return a response token
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
        ];
    }

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null,
        ];
    }
}
