# 📚 Smart Library Seat Booking System
> A modern, full-stack solution for managing university library seating.

---

## 🌟 Overview
This project is a high-performance **MERN Stack** application designed to eliminate the hassle of finding a study spot. Users can visualize the library layout in real-time, book seats, and manage their reservations through a secure, intuitive interface.

---

## ✨ Key Features

### 👤 User Module
* **Secure Authentication:** JWT-based login and registration with password hashing using Bcrypt.
* **Live Dashboard:** Real-time visualization of the seat grid.
* **One-Click Booking:** Instant seat reservation with immediate UI feedback.

### 🛡️ Admin Module
* **Seat Management:** Create and configure new library seats dynamically.
* **Booking Control:** Authority to cancel or reset any seat booking.
* **Real-time Tracking:** Monitor the occupancy status of the entire library at a glance.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js | Dynamic UI & State Management |
| **Backend** | Node.js & Express | RESTful API Development |
| **Database** | MongoDB Atlas | Cloud NoSQL Data Storage |
| **Styling** | Custom CSS | Clean, modern library aesthetics |
| **Auth** | JWT & Bcrypt | Security & Session Management |

---

## 📂 Project Structure

```text
LibrarySystem/
├── backend/
│   ├── controller/      # Core business logic
│   ├── model/           # Mongoose schemas (User, Seat)
│   ├── route/           # Express endpoint definitions
│   └── index.js         # Server entry point & DB connection
└── frontend/
    ├── src/
    │   ├── Login.jsx    # Auth portal
    │   ├── Register.jsx # User onboarding
    │   ├── Dashboard.jsx# Interactive seat map
    │   └── App.jsx      # Global routing & protection
    └── main.jsx

```
## 🚦 Getting Started
1. Prerequisites
    Node.js installed
    MongoDB Atlas account

2. Backend Setup
    1.Open the root directory.
    2.Create a .env file:

        MONGO_URL="mongodb://localhost:27017/LibrarySeatSystem"
        JWT_SECRET=viharaa_secret_123
        PORT=8000
    3.Run npm install then node index.js.

3. Frontend Setup
    Navigate to /frontend.
    Run npm install.
    Start the app: npm run dev.


## 📡 API Documentation

**Authentication**

    POST /api/auth/register - Create a new student account.
    POST /api/auth/login - Authenticate and receive a JWT.

**Seat Operations**

    GET /api/seats/getall - Fetch all library seats.
    POST /api/seats/create - Initialize a new seat (Admin Only).
    POST /api/seats/book/:id - Reserve a seat for a user.
    PUT /api/seats/cancel/:id - Reset seat availability (Admin Only).

## 🎓 Author

Vihara MERN Stack Developer | 2026 Final Project Submission