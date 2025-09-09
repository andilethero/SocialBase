# SocialBase

## Description

SocialBase is a simple JavaFX desktop application that simulates a basic social networking platform. Users can register, log in, create posts, and view their own posts. The application demonstrates user authentication, basic post management, and a simple in-memory data model for users, posts, comments, and replies.

## Features

- User registration and authentication
- Create, view, and manage posts
- Simple GUI with login and main menu screens
- In-memory storage for users and posts (no database required)
- Basic support for comments and replies (data model)

## Project Structure

- `SocialBassApp.java` - Main JavaFX application, handles UI and user interaction.
- `SocialBaseService.java` - Core service logic for user, post, and session management.
- `User.java` - User entity, stores user credentials and information.
- `Post.java` - Post entity, links content to a user and supports comments.
- `Comment.java` - Comment entity, associated with posts and supports replies.
- `Reply.java` - Reply entity, supports nested replies to comments.
- `README.md` - Project documentation.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/andilethero/SocialBase.git
   ```
2. Open the project in your preferred Java IDE.
3. Make sure JavaFX is set up in your development environment.
4. Run `SocialBassApp.java` to launch the application.

## Usage

- Register a new user or log in with your credentials.
- Create new posts from the main menu.
- View all posts you have created.
- Log out to return to the login screen.

## Acknowledgments

This project is intended as a simple demonstration of desktop application development with JavaFX and basic social networking concepts.
