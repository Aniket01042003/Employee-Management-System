# Employee Data Management

## Project Description
Employee Data Management is a full-stack CRUD (Create, Read, Update, Delete) application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. The project allows you to manage a list of employees with their **name, email, and position**. Users can **add, edit, delete, view, and search employees**, as well as **share employee profiles**.  

### Key Features
- **Backend**
  - RESTful API for employees (`/api/employee`) with full CRUD functionality.
  - Validates input and prevents duplicate emails.
  - Error handling and proper HTTP status codes.
  
- **Frontend**
  - Display employees in a table with columns: Name, Email, Position, Actions.
  - Add employee form with validation.
  - Edit and delete employee functionality.
  - Search/filter employees by **name** or **position**.
  - Share employee profile using the browser’s share API.

- **Bonus / Extra Features**
  - Live search by position.
  - Share employee profile via link.
  - User-friendly UI with modals and Complete notify system using toastify.

---

## Project Structure

employee-management/
├── backend/
│   ├── config/
│   │   └── Db.js                # MongoDB connection file
│   ├── controllers/
│   │   └── employeeController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employees.js
│   ├── server.js
│   ├── package.json
│   └── .env                     # Add your Mongo URI here
├── frontend/web/
│   ├── public/
│   │   └── /employee-profile-icon.jpg
│   │   └── /vite.svg
│   ├── src/
│   │   ├── components/          # e.g., EmpData.jsx, EmpList.jsx,Footer.jsx, Home.jsx,Navbar.jsx, NoRecordFound.jsx, ViewEmpData.jsx
│   │   ├── Redux/               
│   |   │   ├── Action.js
│   |   │   ├── ActionTypes.js
│   |   │   ├── Reducer.js
│   |   │   ├── store.js
│   │   ├── Routes/               
│   |   │   ├── EmpRoutes.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── index.css
│   │   └── main.js
│   ├── index.html
│   ├── package.json
│   └── README.md                # Can be same as root README or blank
├── README.md                    # Full README file I wrote earlier
└── .gitignore



---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- a MongoDB Atlas account
- Git installed

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/Aniket01042003/Employee-Management-System.git

2. **Navigate to the backend folder**
```bash
cd backend

3. **Install dependencies**
```bash
npm install

3. **Create a .env file in the backend folder and add:**
```bash
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
NODE_ENV=development

4. **Start the backend server**
```bash
npm start


### Frontend Setup

1. **Navigate to the frontend folder**
```bash
cd frontend

2. **Install dependencies**
```bash
npm install

3. **Create a .env file in the frontend folder and add:**
```bash
VITE_API_BASE_URL=http://localhost:5000/api

4. **Start the frontend development server**
```bash
npm run dev


## Assumptions & Design Choices

- Used **MongoDB** instead of SQLite for easier setup and scalability.
- Backend routes are **RESTful** and include proper HTTP status codes.
- Employee **email must be unique** to prevent duplicates.
- Frontend implemented with **React** and optional **Redux** for state management.
- Extra features like **profile sharing** and **search by position** were added to enhance usability.
- **Modals** are used for editing forms for better user experience.


## Usage

1. Add a new employee using the **"Add Employee"** form.
2. Edit or delete employees using **action buttons** in the table.
3. Search for employees by **name** or **position** using the search bar.
4. Share an employee profile using the **"Share"** button.


## Author

**Aniket Kapse**  
Email: aniketkapse100@gmail.com 
GitHub: https://github.com/Aniket01042003/




