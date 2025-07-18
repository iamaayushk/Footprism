# FootPrism

FootPrism is a web application that empowers users to track, analyze, and reduce their carbon footprint. The platform offers a dashboard with visualizations, calculators, and goal-setting features to promote sustainable living.

## Features

- **User Authentication:** Secure login and signup.
- **Carbon Calculator:** Log daily activities (electricity, travel, shopping, trash) to estimate carbon emissions.
- **Dashboard:** Visualize your carbon footprint with bar, line, and pie charts.
- **Goal Tracking:** Set and monitor monthly carbon reduction goals.
- **Progress Feedback:** Get real-time feedback on your daily and monthly performance.
- **Modern UI:** Built with React and Tailwind CSS.

## Tech Stack

- **Frontend:** React, Vite, Recharts, Axios, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Cookie-based sessions

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the repository:**

   ```powershell
   git clone <repository-url>
   cd "FootPrism"
   ```

2. **Install dependencies:**

   - For the client:

     ```powershell
     cd Client
     npm install
     ```

   - For the server:
     ```powershell
     cd ../Server
     npm install
     ```

3. **Configure environment variables:**

   - Create a `.env` file in the `Server` directory with your MongoDB URI and any other secrets.

4. **Start the development servers:**

   - Start the backend:

     ```powershell
     cd Server
     npm start
     ```

   - Start the frontend:
     ```powershell
     cd ../Client
     npm run dev
     ```

5. **Access the app:**
   - Open your browser and go to `http://localhost:5173`

## Project Structure

```
FootPrism/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── Context/
│   │   ├── Pages/
│   │   └── utils/
│   ├── App.jsx
│   └── ...
├── Server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
└── README.md
```

## Usage

1. **Sign up** for a new account.
2. **Log in** and navigate to the dashboard.
3. **Enter your daily activities** in the calculator.
4. **Track your progress** and adjust your habits to meet your sustainability goals.


# FootPrism Server

This is the backend server for the FootPrism application. It provides RESTful APIs for user authentication, carbon footprint logging, and data retrieval to support the frontend dashboard and calculator.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User registration and login with secure authentication
- Carbon log creation and retrieval
- Monthly and daily carbon footprint calculations
- Goal tracking and progress feedback

---

## Tech Stack

- **Node.js** with **Express** for the server
- **MongoDB** with **Mongoose** for the database
- **JWT** and cookies for authentication
- **CORS** for cross-origin requests

---

## Project Structure

```
Server/
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   └── authController.js # Handles user and carbon log logic
├── middlewares/
│   └── auth.js          # Authentication middleware
├── models/
│   ├── carbonLog.js     # Carbon log schema
│   └── user.js          # User schema
├── routes/
│   └── auth.js          # API routes for authentication and carbon logs
└── index.js             # Entry point of the server
```

---

## Setup & Installation

1. **Install dependencies:**
   ```powershell
   cd Server
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `Server` directory with the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

3. **Start the server:**
   ```powershell
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

---

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication

---

## API Endpoints

### Auth

- `POST /user/signup`  
  Register a new user.  
  **Body:** `{ username, email, password }`

- `POST /user/login`  
  Log in a user and set authentication cookie.  
  **Body:** `{ email, password }`

- `POST /user/logout`  
  Log out the user and clear the authentication cookie.

- `GET /user/me`  
  Get the current authenticated user's info.

---

### Carbon Log

- `POST /user/carbon-log`  
  Add a new carbon log entry.  
  **Body:** `{ electricity, travel, shopping, trash, date }`

- `GET /user/carbon-data`  
  Get all carbon log entries for the authenticated user.

---

## Authentication

- Most endpoints require authentication via HTTP-only cookies.
- Use the `/user/login` endpoint to obtain a session.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

_FootPrism – Take your first step towards a greener future!_
