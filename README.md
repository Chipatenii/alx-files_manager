Here is a README file for your project:

```markdown
# Files Manager

## Description

**Files Manager** is a simple file management platform built using Node.js, Express.js, MongoDB, Redis, and Kue for background processing. The platform allows users to authenticate via tokens, upload and view files, change file permissions, and generate image thumbnails. This project integrates several backend concepts such as authentication, pagination, and background workers, making it a great learning experience for building full-stack backend applications.

## Features

- User authentication via token
- List all files for an authenticated user
- Upload a new file (documents, images)
- Change permission of a file (public/private access)
- View a file
- Generate thumbnails for image files
- Background processing using Redis and Kue

## Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing file data
- **Redis**: In-memory data store used for background processing
- **Kue**: A priority job queue system built on Redis
- **ES6**: Modern JavaScript features
- **Babel**: JavaScript transpiler for compatibility
- **Mocha & Chai**: Testing framework for unit and integration tests

## Learning Objectives

At the end of this project, you should be able to:

- Create an API using Express.js
- Implement user authentication with tokens
- Store and manage data using MongoDB
- Use Redis for caching and background processing
- Implement pagination for listing data
- Process image files and generate thumbnails
- Set up background workers using Kue

## Project Structure

The project is structured as follows:

```
.
├── controllers/          # Handle business logic
├── routes/               # API routes
├── utils/                # Utility functions (e.g., file handling)
├── workers/              # Background job workers
├── tests/                # Unit and integration tests
├── .eslintrc.js          # ESLint configuration
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project description and usage guide
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chipatenii/files_manager.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run start-server
   ```

4. Start the background worker:
   ```bash
   npm run start-worker
   ```

## Usage

### API Endpoints

1. **POST /auth/login**
   - Authenticate a user and generate a token.
   
2. **GET /files**
   - List all files for the authenticated user.
   
3. **POST /files**
   - Upload a new file (supports image, document types).
   
4. **PUT /files/:id/permission**
   - Update file permissions (public/private).
   
5. **GET /files/:id**
   - View a file by ID.
   
6. **GET /files/:id/thumbnail**
   - Get the thumbnail of an image file.

### Environment Variables

Make sure to set the following environment variables:

- `PORT`: The port where the server will run.
- `MONGO_URL`: MongoDB connection string.
- `REDIS_HOST`: Redis host URL.
- `REDIS_PORT`: Redis port.

## License

This project is licensed under the ISC License.

## Author

- **Innocent Manda**  
  GitHub: [chipatenii](https://github.com/chipatenii)  
  Email: [innocentmanda70@gmail.com](mailto:innocentmanda70@gmail.com)
```
