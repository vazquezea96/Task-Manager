## Wire Frames

![prototype](https://media.git.generalassemb.ly/user/51629/files/9e2ee7cd-cfaa-4080-9a33-569ff8b2cc58)
![add_delete](https://media.git.generalassemb.ly/user/51629/files/852e8f5c-c48e-49fa-ac5d-cada14048b5b)

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

## GitHub Repository

https://github.com/vazquezea96/Task-Manager

## User Stories

- As a non-technical HR manager, I want to quickly see the skills and experience of a candidate, so that I can evaluate whether the candidate meets the requirements for an open position at my company.
- As a mid-level engineer, I want to view a junior developer's project and read their code to evaluate their coding skills.
- As a friend of the person who built this portfolio, I want to see what my friend has built so that I understand what they do as a developer and can encourage them.
- As a user, I want to be able to create new tasks so that I can organize and manage my work effectively.

## MVP Goals (How your specific project will look & behave in order to accomplish MVP)

### User Authentication: (Stretch goal, if time permits)

Allow users to register with a username and password.
Provide a login page for existing users.

### Task Management:

Allow users to create new tasks with a title and description.
Display a list of tasks on the user's dashboard.
Enable users to mark tasks as completed or delete them.

### Task Details:

Implement a task details page showing additional information (e.g., due date, priority).
Allow users to edit task details.

### User Dashboard:

Display a personalized dashboard for each user, showing their tasks.
Include sections for upcoming tasks and completed tasks.

### Categories or Labels: (stretch goal)

Allow users to categorize tasks with labels or categories.
Provide a way to filter tasks based on categories.

### Responsive Design: (Utilize Bootstrap)

Ensure the application is responsive for a seamless experience on different devices.

## Anything Else You'd Like Us to Know

I would like to add the Spotify API so users can listen to music without leaving the page.
