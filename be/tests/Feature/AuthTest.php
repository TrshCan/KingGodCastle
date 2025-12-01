<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_generates_and_returns_token(): void
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response = $this->post('/graphql', [
            'query' => '
                mutation login($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                        token
                        user {
                            id
                            email
                        }
                    }
                }
            ',
            'variables' => [
                'email' => 'test@example.com',
                'password' => 'password',
            ],
        ]);

        $response->assertStatus(200);
        
        $data = $response->json('data.login');
        $this->assertNotNull($data['token']);
        
        $user->refresh();
        $this->assertEquals($data['token'], $user->token);
    }
}
