# 🚀 Full Stack Task Manager App (DekNek Assessment)

## 📌 Overview

This is a full-stack Task Management application developed.
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

* 🔗 Deployed link https://task-manager-app-nine-zeta.vercel.app/
  

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

MIT License

Copyright (c) 2026 Aniket Jha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
