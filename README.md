#Library Seat Management System

A web-based backend system designed to monitor and manage library seat availability in real-time. Built using the MERN stack (MongoDB, Express.js, Node.js), this system helps students find vacant study spots efficiently.

---

#Project Overview
Students and staff often struggle to find empty seats in the library during peak hours. This system provides a digital solution to track every seat, its floor location, and current availability status.

#Tech Stack
-Backend: Node.js, Express.js
-Database: MongoDB Compass
-Modeling: Mongoose ODM
-API Testing: Postman
-Version Control: Git & GitHub

#Key Features
-Seat Registration: Add new seats with specific floor numbers.
-Live Status: View which seats are available or occupied by students.
-Data Accuracy: Automatically updates timestamps for every change.
-REST API: Fully functional endpoints for Create, Read, Update, and Delete operations.

---

#API Testing Screenshots

1. Creating a New Seat Record (POST)
The following screenshot shows the successful creation of a seat entry in the database using Postman.
![Seat Creation](screenshots/create1.jpg)

2. Fetching All Seat Data (GET)
This screenshot displays the list of all registered seats retrieved from the MongoDB database.
![Fetch All Seats](screenshots/getAll.jpg)

3. Updating a Seat Record (PUT)
Updating the status of a specific seat (e.g., marking a seat as occupied or changing the floor) using its unique ID.
![Update Seat](screenshots/update.jpg)

4. Deleting a Seat Record (DELETE)
Removing a seat record from the database once it is no longer in use or during maintenance.
![Delete Seat](screenshots/delete.jpg)

---