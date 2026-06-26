# TaskFlow - MERN Task Manager

A simple Task Manager web application built using the MERN stack to learn full-stack development. The application allows users to register, log in securely, and manage their personal tasks with complete CRUD functionality.

## Features

- User Registration and Login
- JWT Authentication
- Protected Routes
- Create Tasks
- View Tasks
- Edit Tasks
- Delete Tasks
- Dashboard with Task Statistics
- Responsive Dark UI

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## Folder Structure

```
task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-mern.git
```

### 2. Move into the project

```bash
cd task-manager-mern
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

### 5. Create a `.env` file inside the `server` folder

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 6. Start the backend

```bash
npm run dev
```

### 7. Start the frontend

```bash
cd ../client
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |


## What I Learned

This project helped me understand:

- Building REST APIs using Express.js
- Connecting MongoDB with Mongoose
- JWT Authentication
- React Routing
- Context API
- State Management using React Hooks
- CRUD Operations
- Axios API Integration
- Component-based React Architecture

## Future Improvements

- Search Tasks
- Filter by Status and Priority
- Due Dates
- Profile Page
- Responsive Mobile Layout
- Deploy Frontend and Backend

## Author

**Pallavi Satram**

GitHub: https://github.com/PallaviSatram
