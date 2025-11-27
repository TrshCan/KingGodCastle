# Architecture Documentation

## Overview

This application follows a **layered architecture** pattern with clear separation of concerns:

1. **Resolvers/Controllers** - Handle HTTP/GraphQL requests, authentication, and authorization
2. **Services** - Business logic, validations, and orchestration
3. **Repositories** - Data access layer, database communication
4. **Models** - Eloquent models representing database entities

## Directory Structure

```
app/
├── GraphQL/
│   └── Resolvers/          # GraphQL resolvers (Lighthouse)
├── Http/
│   ├── Controllers/
│   │   └── Api/            # REST API controllers
│   └── Middleware/          # Authentication & Authorization middleware
├── Models/                 # Eloquent models
├── Policies/               # Authorization policies
├── Repositories/           # Data access layer
│   ├── BaseRepository.php
│   └── RepositoryInterface.php
├── Services/               # Business logic layer
└── Providers/
    └── RepositoryServiceProvider.php  # Dependency injection
```

## Architecture Layers

### 1. Resolvers/Controllers Layer

**Purpose**: Handle incoming requests, authentication, and authorization

**Location**: 
- GraphQL: `app/GraphQL/Resolvers/`
- REST: `app/Http/Controllers/Api/`

**Responsibilities**:
- Validate request format
- Authenticate users
- Authorize actions
- Call appropriate services
- Format responses

**Example**:
```php
class UserResolver
{
    public function me($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }
        return $this->userService->getUserProfile($user->id);
    }
}
```

### 2. Services Layer

**Purpose**: Business logic, validations, and orchestration

**Location**: `app/Services/`

**Responsibilities**:
- Implement business rules
- Validate data
- Orchestrate multiple repository calls
- Handle transactions
- Throw business exceptions

**Example**:
```php
class UserService
{
    public function register(array $data): User
    {
        $this->validateRegistration($data);
        $data['password'] = Hash::make($data['password']);
        return $this->userRepository->create($data);
    }
}
```

### 3. Repositories Layer

**Purpose**: Data access and database communication

**Location**: `app/Repositories/`

**Responsibilities**:
- CRUD operations
- Complex queries
- Eager loading relationships
- Database-specific logic

**Example**:
```php
class UserRepository extends BaseRepository
{
    public function getUserWithHeroes(int $userId): ?User
    {
        return $this->model->with('userHeroes.hero', 'userHeroes.stats')->find($userId);
    }
}
```

## Authentication & Authorization

### Authentication

Authentication is handled via Laravel's built-in `Auth` facade:

```php
$user = Auth::user();
if (!$user) {
    throw new \Exception("Unauthenticated", 401);
}
```

### Authorization

Authorization can be implemented using:

1. **Middleware**: `app/Http/Middleware/AuthorizeResource.php`
2. **Policies**: `app/Policies/BasePolicy.php`
3. **Service-level checks**: In service methods

Example service-level authorization:
```php
public function updateTeam(int $teamId, int $userId, array $data): Team
{
    $team = $this->teamRepository->findOrFail($teamId);
    if ($team->user_id !== $userId) {
        throw new \Exception("Unauthorized", 403);
    }
    // ...
}
```

## Dependency Injection

All dependencies are injected via constructor injection and registered in `RepositoryServiceProvider`:

```php
// In RepositoryServiceProvider
$this->app->singleton(UserRepository::class, function ($app) {
    return new UserRepository(new User());
});
```

Services automatically receive repositories via dependency injection:

```php
class UserService
{
    public function __construct(
        protected UserRepository $userRepository
    ) {}
}
```

## Usage Examples

### GraphQL Resolver

```php
// app/GraphQL/Resolvers/UserResolver.php
class UserResolver
{
    public function __construct(protected UserService $userService) {}
    
    public function me($root, array $args)
    {
        $user = Auth::user();
        if (!$user) throw new \Exception("Unauthenticated", 401);
        return $this->userService->getUserProfile($user->id);
    }
}
```

### REST Controller

```php
// app/Http/Controllers/Api/UserController.php
class UserController extends Controller
{
    public function __construct(protected UserService $userService) {}
    
    public function me()
    {
        $user = Auth::user();
        if (!$user) return response()->json(['error' => 'Unauthenticated'], 401);
        return response()->json($this->userService->getUserProfile($user->id));
    }
}
```

## Best Practices

1. **Never access models directly in resolvers/controllers** - Always use services
2. **Keep repositories focused** - Only data access logic
3. **Business logic in services** - Validations, calculations, etc.
4. **Use transactions** - For operations that modify multiple records
5. **Handle exceptions** - Throw meaningful exceptions with appropriate HTTP codes
6. **Validate input** - Use Laravel's validation in services
7. **Eager load relationships** - Prevent N+1 queries in repositories

## Extending the Architecture

### Adding a New Feature

1. **Create Repository** (if needed):
   ```php
   class NewRepository extends BaseRepository { }
   ```

2. **Create Service**:
   ```php
   class NewService
   {
       public function __construct(protected NewRepository $repository) {}
   }
   ```

3. **Create Resolver/Controller**:
   ```php
   class NewResolver
   {
       public function __construct(protected NewService $service) {}
   }
   ```

4. **Register in RepositoryServiceProvider**:
   ```php
   $this->app->singleton(NewRepository::class, function ($app) {
       return new NewRepository(new NewModel());
   });
   ```

