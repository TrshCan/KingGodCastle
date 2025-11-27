<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthenticateGraphQL
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::check()) {
            return response()->json([
                'errors' => [[
                    'message' => 'Unauthenticated',
                    'extensions' => ['code' => 'UNAUTHENTICATED']
                ]]
            ], 401);
        }

        return $next($request);
    }
}

