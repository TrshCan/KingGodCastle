<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthorizeResource
{
    public function handle(Request $request, Closure $next, string $resource, string $action = 'access'): Response
    {
        $user = $request->user();
        
        if (!$user) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        // Admin can access everything
        if ($user->role === 'admin') {
            return $next($request);
        }

        // Add custom authorization logic here
        // Example: Check if user owns the resource
        if ($action === 'own') {
            $resourceId = $request->route('id') ?? $request->input('id');
            // Implement ownership check
        }

        return $next($request);
    }
}

