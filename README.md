# Blog Site Using MEN Stack

This project is a blog site built using the MEN stack (MongoDB, Express.js, and Node.js) with EJS as the templating engine. The site is styled using Bootstrap and includes features such as user authentication, post creation, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Leac1m/blog_site_using_men_stack.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog_site_using_men_stack
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the site.

## Features

- User authentication with session management.
- Create, read, update, and delete blog posts.
- Responsive design using Bootstrap.
- Contact form integrated with SB Forms.

## Scripts

The following scripts are available in the `package.json`:

```json
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- `start`: Starts the server using `nodemon` for automatic restarts on file changes.

## Dependencies

The project uses the following dependencies:

- **bcrypt**: For hashing passwords.
- **body-parser**: To parse incoming request bodies.
- **connect-flash**: For flash messages.
- **ejs**: Templating engine.
- **express**: Web framework for Node.js.
- **express-fileupload**: Middleware for handling file uploads.
- **express-session**: Session middleware.
- **mongoose**: MongoDB object modeling tool.
- **mongoose-unique-validator**: Plugin for Mongoose to validate unique fields.

## Dev Dependencies

The project uses the following dev dependencies:

- **nodemon**: For automatically restarting the server during development.

## License
Feel free to contribute to this project by submitting issues or pull requests. If you have any questions, please contact the author.
