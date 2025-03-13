# Login2.0-Servidor

A robust authentication server built with modern JavaScript technologies, implementing JWT-based authentication and secure user management.

## Technologies Used

- **Fastify** - Modern and efficient web framework for Node.js
- **Prisma** - Next-generation ORM for Node.js and TypeScript
- **fastify-jwt** - JWT authentication for Fastify
- **bcrypt** - Password hashing library
- **ESModules** - Modern JavaScript modules

## Project Structure

```
src/
├── controllers/      # Request handlers
├── routes/          # API route definitions
├── services/        # Business logic
├── database/        # Database operations
├── hooks/           # Middleware functions
└── utils/           # Helper functions
```

## Core Features

- JWT-based authentication system
- Protected routes with middleware validation
- Password hashing with bcrypt
- User management with Prisma ORM
- Stateless authentication
- Request validation and error handling

## API Endpoints

- `POST /login` - Authenticate user and receive JWT token
- `POST /protected-user` - Protected route for authenticated users

## Security Features

- Password hashing using bcrypt
- JWT token expiration (1 hour)
- Protected routes middleware
- Token validation and verification
- Secure password comparison

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/GitDavidJr/Login2.0-servidor.git
    ```

2. Install dependencies:
    ```bash
    cd Login2.0-servidor
    npm install
    ```

3. Set up environment variables:
    - Create `.env` file
    - Add required variables:
      - `PORT` - Server port (default: 3333)
      - `SECRET_KEY` - JWT secret key
      - Database connection URL

4. Start the server:
    ```bash
    npm start
    ```

## Related Projects

- Frontend Application: [Login2.0](https://github.com/GitDavidJr/Login2.0)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
