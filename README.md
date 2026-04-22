# 🚀 Full Stack Task Manager App (DekNek Assessment)

## 📌 Overview

This is a full-stack Task Management application built as part of the DekNek Full Stack Developer Internship assessment.
The app allows users to securely register, log in, and manage their tasks (create, view, delete).

---

## ✨ Features

* 🔐 User Authentication (Signup & Login with JWT)
* 📝 Create Tasks
* 📋 View Tasks
* ❌ Delete Tasks
* 🔄 Update Task Status
* 🔒 Protected Routes
* 🌐 Fully Deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 🌐 Live Demo

* 🔗 Frontend: [https://your-vercel-url.vercel.app](https://deknek-tasks-64lv89d41-aniket-dev30s-projects.vercel.app?_vercel_share=rF9XA5XkmtnERCB2AeKo5ZjUscJZQJx9)
* 🔗 Backend API: https://deknek-tasks-api.onrender.com

---

## 📂 Project Structure

```
deknek-tasks/
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/deknek-tasks.git
cd deknek-tasks
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

## 🔑 API Endpoints

### Authentication

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

---

## 🧪 Testing Checklist

* ✅ Signup works
* ✅ Login works
* ✅ Create task works
* ✅ Delete task works
* ✅ Update task works
* ✅ Protected routes secured
* ✅ Deployment working

---

## 🚨 Important Notes

* Environment variables are not included in the repository
* MongoDB Atlas is used for database
* Backend deployed on Render (may take a few seconds to wake up)

---

## 👨‍💻 Author

**Aniket Jha**

* GitHub: https://github.com/aniket-dev30

---

## ⭐ Acknowledgment

This project was built as part of the DekNek internship selection process.

---
