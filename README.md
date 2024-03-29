## Embedded Screenshots

![Screenshot of Todo App](/assets/images/todo-manager1.png)
![Screenshot of Todo App](/assets/images/task-manager2.png)

## Route Table

| **URL**         | **REST Route** | **HTTP Verb** | **CRUD Action** | **EJS View(s)**  |
| --------------- | -------------- | ------------- | --------------- | ---------------- |
| /dashboard      |                | GET           | read            | home.ejs         |
| /tasks          | index          | GET           | read            | task-index.ejs   |
| /tasks/:id      | show           | GET           | read            | task-details.ejs |
| /tasks/new      | new            | GET           |                 | new-task.ejs     |
| /tasks          | create         | POST          | create          |                  |
| /tasks/:id/edit | edit           | GET           | read            | edit-task.ejs    |
| /tasks/:id      | update         | PATCH/PUT     | update          |                  |
| /tasks/:id      | destroy        | DELETE        | delete          |                  |
| /seed           |                | GET           | delete & create |                  |
| /about          |                | GET           |                 | about.ejs        |
| /\*             |                | GET           |                 | 404.ejs          |
| /users          | index          | GET           | read            | user-index.ejs   |
| /users/:id      | show           | GET           | read            | user-details.ejs |
| /users/new      | new            | GET           |                 | new-user.ejs     |
| /users          | create         | POST          | create          |                  |
| /users/:id/edit | edit           | GET           | read            | edit-user.ejs    |
| /users/:id      | update         | PATCH/PUT     | update          |                  |
| /users/:id      | destroy        | DELETE        | delete          |                  |

## Live Demo

https://ga-task-manager-app-96188fead713.herokuapp.com/

## Technologies Used:

- HTML
- CSS
 - [JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
 - [Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- EJS
- MongoDB
- Mongoose

## Installation Instructions:

- Fork Repo
- Run `npm install` in Root Folder
- Create .env file, add your db string in order to connect to db
- Run `npm run dev`
- Go to `localhost:3000`

## User Stories

- As a non-technical HR manager, I want to quickly see the skills and experience of a candidate, so that I can evaluate whether the candidate meets the requirements for an open position at my company.
- As a mid-level engineer, I want to view a junior developer's project and read their code to evaluate their coding skills.
- As a friend of the person who built this portfolio, I want to see what my friend has built so that I understand what they do as a developer and can encourage them.
- As a user, I want to be able to create new tasks so that I can organize and manage my work effectively.

## Unsolved Problems or Major Hurdles I faced:

- Hosting the application on Heroku has been my biggest unsolved problem. Somehow the app opens the home page but when I go to the todos route the web app crashes. Still haven't found out why but I will. Aside from that I had some trouble connecting the routes in the beginning.

## Next Steps:

### User Authentication:

Allow users to register with a username and password.

Provide a login/sign-up page for existing users.

### Task Details:

Implement a task details page showing additional information (e.g., due date, priority).

Allow users to edit task details.

### User Dashboard:

Display a personalized dashboard for each user, showing their tasks.
Include sections for upcoming tasks and completed tasks.

Drag & Drop Functionality

### Categories or Labels:

Allow users to categorize tasks with labels or categories.

Provide a way to filter tasks based on categories.
