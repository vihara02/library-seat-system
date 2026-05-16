# 📚 Pro Library Seat Management System

A comprehensive, full-stack application designed to automate, manage, and optimize study seat allocations in a university library environment.

---

## 📝 Problem Description
Traditional library seat management relies on manual tracking, leading to multiple inefficiencies:
* **Seat Hoarding:** Students leaving personal belongings to secure seats for hours while staying absent.
* **Lack of Real-Time Data:** No way for students to check seat availability beforehand, causing unnecessary crowds and wasted time inside the library.
* **Manual Record Keeping:** Administrators struggle to track peak hours, usage statistics, and user accountability.

---

## 💡 Proposed Solution
The **Pro Library Seat Management System** addresses these issues through a centralized digital platform:
* **Live Dashboard:** Provides real-time visibility of active, available, and reserved seats.
* **Instant Booking & Release:** Allows students to claim an available seat by entering their student ID and release it instantly upon departure.
* **Role-Based Transparency:** Enhances accountability, prevents seat hoarding, and minimizes administrative overhead.

---

## ✨ Features
* **Secure Authentication:** User login and registration using **JWT** (JSON Web Tokens).
* **Interactive Seat Grid:** Color-coded visual layout displaying real-time seat availability status.
* **Dynamic Booking:** One-click seat reservation linked directly to a unique Student ID.
* **Instant Release:** Easy check-out mechanism to free up seats for other students.
* **Fully Responsive UI:** Dark-themed modern interface optimized for desktop, tablet, and mobile browsers.

---

## 🛠️ Technologies Used
* **Frontend:** React.js, Vite, Axios, Tailwind / CSS3
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Security:** JSON Web Tokens (JWT), Bcrypt.js

---

## 🔌 API Endpoints

### 🔐 Authentication Endpoints
#### 1. Register User
* **Endpoint:** `POST /api/library/register`
* **Request Body:**
```json
{
  "name": "Vihara",
  "email": "vihara@gmail.com",
  "password": "vihara123"
}
```

#### 2.Login User
* **Endpoint:** `POST /api/library/login`
* **Request Body:**
```json
{
  "name": "Vihara",
  "email": "vihara@gmail.com",
  "password": "vihara123"
}
```
* **Response:** Returns a valid JWT token.

### 🪑 Seat Management Endpoints
#### 3.Fetch All Seats
* **Endpoint:** `GET /api/library/getAll`
* **Response:** Array of all seat objects with their availability statuses.

#### 4.Create a Seat
* **Endpoint:** `POST /api/library/create`
* **Request Body:**
```json
{
  "seatNumber": "S-101",
  "zone": "Silent Zone"
}
```

#### 5.Update/Book a Seat
* **Endpoint:** `PUT /api/library/update/:id`
* **Request Body:**
```json
{
  "isAvailable": false,
  "studentId": "ST12345"
}
```

#### 6.Delete a Seat
* **Endpoint:** `DELETE /api/library/delete/:id`


## 🚀 Setup Instructions

#### 1. Prerequisites
Ensure you have the following installed on your system:
* **Node.js (v16 or higher)**
* **MongoDB running locally**

#### 2. Environment Variables
Create a .env file in your backend root directory and add:

    PORT=8000
    MONGO_URL=mongodb://localhost:27017/LibrarySystem


## 🏃 How to Run the Project

#### Step 1: Run the Backend Server
```bash
# Navigate to the backend folder
cd backend

# Install necessary packages
npm install

# Start the Node server
node index.js
```

#### Step 2: Run the Frontend Application
```bash
# Navigate to the frontend folder
cd frontend

# Install client-side dependencies
npm install

# Start the development server
npm run dev
```
Once both servers are running, open your browser and navigate to the local URL provided by Vite (usually http://localhost:5173).

#### Developed by Vihara 🚀


