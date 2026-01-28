# Admin and User Panel Project

## Project Description

This project implements an admin and user panel with functionalities for login, user management, photo upload, and password reset using Node.js, Express.js, and MySQL.

## Prerequisites

- Node.js
- MySQL
- Postman (for API testing)

## Setup Instructions

### 1. Install Dependencies

npm install express ejs mysql dotenv bcryptjs jsonwebtoken multer body-parser express-validator


2. Start the Application
node index.js

3. Access the Application
http://localhost:6000

API Testing

Admin Panel
1) Admin Login
Method: POST
URL: http://localhost:3000/admin/login
Headers:(change)
Content-Type: application/json
Body:(raw)
json
{
  "email": "admin@example.com",
  "password": "adminpassword"
}
results:jwt_token.

2) Create User-Panel User
Method: POST
URL: http://localhost:3000/admin/users
Headers:(change)
Content-Type: application/json
Authorization: Bearer <jwt_token>
Body:(raw)
json
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "userpassword",
  "role": "user"
}
results:user created successfully

3) List User-Panel Users
Method: GET
URL: http://localhost:3000/admin/users
Headers:(change)
Authorization: Bearer <jwt_token>

results:listing created users details.

4) Edit User-Panel User
Method: PUT
URL: http://localhost:3000/admin/users/2
Headers:(change)
Content-Type: application/json
Authorization: Bearer <jwt_token>
Body:(raw)
json
{
  "username": "updateduser",
  "email": "updateduser@example.com",
  "password": "updatedpassword",
  "role": "user"
}
results:user updated successfully.

5) Delete User-Panel User
Method: DELETE
URL: http://localhost:3000/admin/users/1
Headers:(change)
Authorization: Bearer <jwt_token>


API Testing User-panel

1) User Login
Method: POST
URL: http://localhost:3000/user/login
Headers:(change)
Content-Type: application/json
Body:(raw)
json
{
  "email": "user@example.com",
  "password": "userpassword"
}

results:jwt_token

2) Upload Photo
Method: POST
URL: http://localhost:3000/user/upload-photo
Headers:(change)
Authorization: Bearer <jwt_token>
Body (form-data):
Key: photo
Type: File
Value: Choose a file to upload
results:upload folder image added

3) Reset Password
Method: POST
URL: http://localhost:3000/user/reset-password
Headers:(change)
Content-Type: application/json
Body:(raw)
json
{
  "email": "user@example.com",
  "newPassword": "newpassword"
}
