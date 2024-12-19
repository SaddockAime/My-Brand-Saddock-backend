# My-Brand-Saddock-backend

[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/27632a66198c4b9afbc4/maintainability)](https://codeclimate.com/github/SaddockAime/My-Brand-Saddock-backend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/27632a66198c4b9afbc4/test_coverage)](https://codeclimate.com/github/SaddockAime/My-Brand-Saddock-backend/test_coverage)
<!--
[![Coverage Status](https://coveralls.io/repos/github/SaddockAime/My-Brand-Saddock-backend/badge.svg?branch=main)](https://coveralls.io/github/SaddockAime/My-Brand-Saddock-backend?branch=main)
[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/YP657XkYXwnQfGBvMSFtNN/Ew4rKc7T4aHxi1UN1mnNSL/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/YP657XkYXwnQfGBvMSFtNN/Ew4rKc7T4aHxi1UN1mnNSL/tree/main)
-->

## Features

### User Management
- **Signup**: Create a new user account.
- **Login**: Authenticate an existing user.
- **View Users**: Retrieve a list of all users.
- **Delete User**: Remove a user by ID.

### Blog Management
- **Create Blog**: Add a new blog post with an image.
- **View Blogs**: Retrieve a list of all blog posts.
- **View Blog by ID**: Retrieve a specific blog post by its ID.
- **Update Blog**: Modify an existing blog post by ID.
- **Delete Blog**: Remove a blog post by ID.

### Message Management
- **Create Message**: Send a new message.
- **View Messages**: Retrieve a list of all messages.
- **Delete Message**: Remove a message by ID.

### Subscriber Management
- **Create Subscriber**: Add a new subscriber.
- **View Subscribers**: Retrieve a list of all subscribers.
- **Delete Subscriber**: Remove a subscriber by ID.

### Utilities
- **Cloudinary Integration**: Upload and manage images using Cloudinary.
- **Multer Integration**: Handle file uploads using Multer.

### Middleware
- **Authentication**: Protect routes using JWT-based authentication.

### Testing
- **Unit Tests**: Comprehensive unit tests for all modules using Mocha and Chai.
- **Coverage Reports**: Generate test coverage reports using NYC.

### CI/CD
- **GitHub Actions**: Automated CI/CD pipeline using GitHub Actions.
- **CircleCI**: Automated CI/CD pipeline using CircleCI.

### Documentation
- **Swagger**: API documentation using Swagger.

### Configuration
- **Environment Variables**: Manage configuration using environment variables.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Cloudinary Account

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/SaddockAime/My-Brand-Saddock-backend.git
2. Install dependencies
- npm install
3. update environment variables with .env.example

### Running the Server
- npm start

### Running Tests
- npm test

### Generating Coverage Reports
- npm run coverage
