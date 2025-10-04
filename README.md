# Employee Data Management System 📊

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge&logo=mongodb&logoColor=white) 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack CRUD (Create, Read, Update, Delete) application for managing employee data, built with the powerful **MERN stack (MongoDB, Express.js, React.js, Node.js)**.



---

## 🚀 Project Description

Employee Data Management is a comprehensive solution for handling employee records. It provides a clean, intuitive interface to manage a list of employees, including their **name, email, and position**. The application supports all essential CRUD operations, allowing users to effortlessly **add, view, edit, delete, and search** for employees. It also includes modern features like **profile sharing** to enhance collaboration.

---

## ✨ Key Features

### Backend
-    **RESTful API**: A robust API (`/api/employee`) with full CRUD functionality.
-    **Input Validation**: Ensures data integrity and prevents duplicate emails.
-    **Error Handling**: Implements proper middleware for error handling and sends appropriate HTTP status codes.

### Frontend
-   **Dynamic Table**: Displays all employees with columns for Name, Email, Position, and Actions.
-   **Add Employee**: A user-friendly form with validation to add new employees.
-   **Edit & Delete**: Seamlessly update or remove employee records.
-   **Live Search**: Instantly filter employees by **name** or **position**.
-   **Share Profiles**: Utilizes the browser's share API to easily share employee profiles.

### Bonus Features
-   **User-Friendly UI**: A clean interface with modals for editing and a complete notification system using **React-Toastify**.
-   **Scalable Structure**: Built with a clear and maintainable project structure.
-  **Add a search/filter**: bar on the frontend to find employees by name and Position.
-  **frontend form validation**
---

## 🛠️ Tech Stack

-   **Frontend**: React.js, Redux, React Router, Axios
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (with Mongoose and Atlas)
-   **Styling**: CSS, Tailwind

---

## 📂 Project Structure
```
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

```
---

## ⚙️ Setup and Installation

### Prerequisites
* Node.js and npm
* MongoDB Atlas account (or a local MongoDB instance)
* Git

### #Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Aniket01042003/Employee-Management-System.git](https://github.com/Aniket01042003/Employee-Management-System.git)
    cd Employee-Management-System
    ```

2.  **Navigate to the backend directory and install dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Create a `.env` file in the `backend` folder and add your environment variables:**
    ```env
    PORT=5000
    MONGO_URI=<your-mongodb-connection-string>
    NODE_ENV=development
    ```

4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:5000`.

### #Frontend Setup

1.  **Navigate to the frontend directory in a new terminal:**
    ```bash
    cd frontend/web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file in the `frontend/web` folder and add the API URL:**
    ```env
    VITE_API_BASE_URL=http://localhost:5000/api
    ```

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is busy).

---

## 📖 API Endpoints

The backend provides the following RESTful endpoints for the `employee` resource:

| Method | Endpoint | Description |
| :--- | :--- |:--- |
| `GET` | `/api/employee` | Fetches all employees. |
| `GET` | `/api/employee/:id` | Fetches a single employee by their ID. |
| `POST` | `/api/employee`| Adds a new employee to the database. |
| `PUT` | `/api/employee/:id` | Updates an existing employee by their ID. |
| `DELETE`| `/api/employee/:id` | Deletes an employee by their ID. |

---

## 🕹️ Usage

1.  Navigate to the application in your browser.
2.  Click the **"Add Employee"** button to open a form and submit details for a new employee.
3.  Use the **action buttons** (Edit, View profile, Delete) in the table to manage existing records.
4.  Type in the **search bar** to filter employees by name or position in real-time.
5.  Click the **"Share"** button on an employee's profile to share their details.

---

## ✍️ Author

**Aniket Kapse**
* **Email**: aniketkapse100@gmail.com
* **GitHub**: [Aniket01042003](https://github.com/Aniket01042003/)