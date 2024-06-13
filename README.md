## Tweet-Jam: A Twitter Based Backend Application

It is made by using the Mongo, Express, Node.

It conclude all the core feature which can be found in the normal twitter app 

## :rocket: Tech Stack

- NodeJs
- Express
- MongoDB
- Mongoose

## :warning: Prerequisite

- node
- npm
- mongodb

## :scroll: Features

- [x] Login
- [x] Signup
- [x] Search
- [x] New tweet
- [x] Like
- [x] Comment
- [x] View Profile
- [x] Edit Profile
- [x] Retweet
- [x] Light theme / Dim theme / Dark theme

## :cd: How to run local

At the ```src``` directory of your project create an .env file with the following contents:

```javascript
JWT_SECRET=<YOUR_SECRET>
JWT_EXPIRE=30d // or any reasonable value that you prefer
MONGOURI=<YOUR_DB_CONNECTION_URI>
NODE_ENV=Dev
```

```
- npm install  
- cd src
- node index.js
```

---
# Authentication API Documentation

This API provides endpoints for user authentication.

## Login

- **URL**: `/api/v1/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token for subsequent requests.
- **Request Body**:
  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "success": true,
      "token": "<JWT Token>"
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**:
    ```json
    {
      "message": "Please provide email and password",
      "statusCode": 400
    }
    ```
    ```json
    {
      "message": "The email is not yet registered to an account",
      "statusCode": 400
    }
    ```
    ```json
    {
      "message": "The password does not match",
      "statusCode": 400
    }
    ```

## Signup

- **URL**: `/api/v1/auth/signup`
- **Method**: `POST`
- **Description**: Registers a new user and returns a JWT token.
- **Request Body**:
  - `username` (string, required): The desired username for the new user.
  - `password` (string, required): The password for the new user.
- **Success Response**:
  - **Code**: `201 Created`
  - **Content**:
    ```json
    {
      "success": true,
      "token": "<JWT Token>"
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: Same as login error responses.

## Get Current User

- **URL**: `/api/v1/auth/me`
- **Method**: `GET`
- **Description**: Retrieves information about the currently authenticated user.
- **Authorization**: JWT Token in the Authorization header.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "success": true,
      "data": {
        "avatar": "<URL to avatar image>",
        "username": "<username>",
        "fullname": "<full name>",
        "email": "<email>",
        "_id": "<user ID>",
        "website": "<website URL>",
        "bio": "<user bio>"
      }
    }
    ```

---

