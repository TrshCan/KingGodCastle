# KingGodCastle

A full-stack application with Laravel backend, React frontend, GraphQL API, and Docker support.

## Tech Stack

- **Backend**: Laravel 10 with GraphQL (rebing/graphql-laravel)
- **Frontend**: React 18 + Vite + TailwindCSS
- **API**: GraphQL
- **Database**: MySQL 8.0
- **Containerization**: Docker & Docker Compose

## Architecture Flow

The application follows a layered architecture pattern for clean separation of concerns:

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND LAYER                          │
│  React Components → Axios HTTP Client → GraphQL Queries/Mutations│
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                               │
│                    GraphQL Endpoint                             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      RESOLVER LAYER                             │
│  • Authentication & Authorization Checks                        │
│  • Request Validation                                           │
│  • Route GraphQL requests to appropriate services               │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SERVICE LAYER                              │
│  • Business Logic Implementation                                │
│  • Input Validation & Sanitization                             │
│  • Data Transformation                                          │
│  • Orchestrate multiple repository calls                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    REPOSITORY LAYER                             │
│  • Database Communication                                       │
│  • Query Building                                               │
│  • Data Persistence                                             │
│  • ORM/Eloquent Operations                                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATABASE LAYER                            │
│                         MySQL 8.0                               │
└─────────────────────────────────────────────────────────────────┘
```

### Request Flow Example

1. **Frontend**: User clicks "Login" button
   ```javascript
   // fe/src/api/graphql/user.js
   axios.post('/graphql', { query: LOGIN_MUTATION, variables: { email, password } })
   ```

2. **GraphQL Endpoint**: Receives the request
   ```
   POST /graphql
   ```

3. **Resolver**: Handles authentication and authorization
   ```php
   // be/app/GraphQL/Mutations/LoginMutation.php
   public function resolve($root, array $args, $context, ResolveInfo $info)
   {
       // Check authentication
       // Validate request
       // Call service layer
   }
   ```

4. **Service**: Validates inputs and implements business logic
   ```php
   // be/app/Services/AuthService.php
   public function login($email, $password)
   {
       // Validate email format
       // Validate password strength
       // Call repository to find user
   }
   ```

5. **Repository**: Communicates with database
   ```php
   // be/app/Repositories/UserRepository.php
   public function findByEmail($email)
   {
       return User::where('email', $email)->first();
   }
   ```

6. **Database**: Returns data
   ```sql
   SELECT * FROM users WHERE email = ?
   ```

### Layer Responsibilities

| Layer | Responsibilities | Should NOT |
|-------|-----------------|------------|
| **Frontend** | UI/UX, User interactions, State management | Direct database access, Business logic |
| **Resolver** | Auth/Authorization, Request routing | Business logic, Direct DB queries |
| **Service** | Business logic, Validation, Data transformation | Direct DB queries, UI concerns |
| **Repository** | Database operations, Query building | Business logic, Validation |

## Project Structure

```
KingGodCastle/
├── backend/          # Laravel backend
├── frontend/         # React + Vite frontend
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Docker and Docker Compose installed
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd KingGodCastle
```

### 2. Set up environment variables

Copy the example environment files:

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

### 3. Build and start containers

```bash
docker-compose up -d --build
```

### 4. Install backend dependencies

```bash
docker-compose exec backend composer install
```

### 5. Generate Laravel application key

```bash
docker-compose exec backend php artisan key:generate
```

### 6. Run database migrations

```bash
docker-compose exec backend php artisan migrate
```

### 7. Install frontend dependencies

```bash
docker-compose exec frontend npm install
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **GraphQL Endpoint**: http://localhost:8000/graphql

## Development

### Backend Development

```bash
# Access backend container
docker-compose exec backend bash

# Run migrations
php artisan migrate

# Create a new migration
php artisan make:migration create_example_table

# Create a new GraphQL query
php artisan make:graphql:query ExampleQuery

# Create a new GraphQL type
php artisan make:graphql:type ExampleType
```

### Frontend Development

```bash
# Access frontend container
docker-compose exec frontend sh

# Install new packages
npm install <package-name>

# Build for production
npm run build
```

## GraphQL Usage

### Example Query

```graphql
query {
  example {
    message
    timestamp
  }
}
```

### Testing GraphQL

You can test GraphQL queries using:
- GraphQL Playground (if configured)
- Postman
- Apollo Studio
- Or directly from the React frontend

## Docker Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up -d --build

# Stop and remove volumes
docker-compose down -v
```

## Environment Variables

### Backend (.env)

Key variables:
- `APP_KEY`: Laravel application key (auto-generated)
- `DB_HOST`: Database host (use `mysql` in Docker)
- `DB_DATABASE`: Database name
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password
- `GRAPHQL_CORS_ALLOWED_ORIGINS`: Allowed CORS origins

### Frontend (.env)

Key variables:
- `VITE_API_URL`: Backend API URL
- `VITE_GRAPHQL_URL`: GraphQL endpoint URL

## Troubleshooting

### Port conflicts

If ports 3000, 8000, or 3306 are already in use, modify the ports in `docker-compose.yml` or `.env` file.

### Database connection issues

Ensure the MySQL container is healthy:
```bash
docker-compose ps
```

### Permission issues

On Linux/Mac, you may need to fix permissions:
```bash
sudo chown -R $USER:$USER backend/storage backend/bootstrap/cache
```

## License

Apache License 2.0
