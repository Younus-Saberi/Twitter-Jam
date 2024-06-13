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

# User API Documentation

This API provides endpoints for user-related operations.

## Get Users

- **URL**: `/api/v1/user`
- **Method**: `GET`
- **Description**: Retrieves a list of users.
- **Authorization**: JWT Token in the Authorization header.

## Get User Feed

- **URL**: `/api/v1/user/feed`
- **Method**: `GET`
- **Description**: Retrieves the feed of posts from users that the current user follows.
- **Authorization**: JWT Token in the Authorization header.

## Get User Profile

- **URL**: `/api/v1/user/:username`
- **Method**: `GET`
- **Description**: Retrieves the profile of a specific user.
- **Authorization**: JWT Token in the Authorization header.

## Follow User

- **URL**: `/api/v1/user/:id/follow`
- **Method**: `GET`
- **Description**: Follows a user.
- **Authorization**: JWT Token in the Authorization header.

## Unfollow User

- **URL**: `/api/v1/user/:id/unfollow`
- **Method**: `GET`
- **Description**: Unfollows a user.
- **Authorization**: JWT Token in the Authorization header.

## Edit User Profile

- **URL**: `/api/v1/user`
- **Method**: `PUT`
- **Description**: Updates the profile information of the current user.
- **Authorization**: JWT Token in the Authorization header.

---

# Post API Documentation

This API provides endpoints for managing posts.

## Get Tags

- **URL**: `/api/v1/post/tags`
- **Method**: `GET`
- **Description**: Retrieves a list of all tags used in posts.
- **Authorization**: Not required.

## Get Posts

- **URL**: `/api/v1/post`
- **Method**: `GET`
- **Description**: Retrieves a list of posts based on provided tag.
- **Authorization**: Not required.

## Get Post

- **URL**: `/api/v1/post/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific post by ID.
- **Authorization**: JWT Token in the Authorization header.

## Add Post

- **URL**: `/api/v1/post`
- **Method**: `POST`
- **Description**: Creates a new post.
- **Authorization**: JWT Token in the Authorization header.

## Toggle Like

- **URL**: `/api/v1/post/:id/togglelike`
- **Method**: `GET`
- **Description**: Toggles like on a post.
- **Authorization**: JWT Token in the Authorization header.

## Toggle Retweet

- **URL**: `/api/v1/post/:id/toggleRetweet`
- **Method**: `GET`
- **Description**: Toggles retweet on a post.
- **Authorization**: JWT Token in the Authorization header.

## Add Comment

- **URL**: `/api/v1/post/:id/comments`
- **Method**: `POST`
- **Description**: Adds a comment to a post.
- **Authorization**: JWT Token in the Authorization header.

## Search Post

- **URL**: `/api/v1/post/search`
- **Method**: `GET`
- **Description**: Searches posts by caption or tag.
- **Authorization**: Not required.

