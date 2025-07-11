# 📚 Books Library Management App

A full-stack MERN web application that helps users manage their personal book collections — add books, track reading status, rate them, and more. Think of it as your own mini Goodreads!

---

## 🌐 Live Demo

- **Frontend (Netlify):** [polite-unicorn-fab52b.netlify.app](https://polite-unicorn-fab52b.netlify.app/)
- **Backend (Render):** [books-library-management-app-unwa.onrender.com](https://books-library-management-app-unwa.onrender.com)

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- ➕ Add books to personal library
- ⭐ Rate books and add reviews
- 📚 Organize books by status: "Read", "Currently Reading", or "Want to Read"
- 🔍 Search books
- ⚙️ RESTful API integration
- 💡 Clean and responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- React
- React Router
- Axios
- Tailwind CSS

### 🧠 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- CORS

---

## 📁 Folder Structure

```
books-library-management-app/
├── client/                 # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── App.jsx
│       └── main.jsx
├── server/                 # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
└── README.md
```

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/books-library-management-app.git
cd books-library-management-app
```

### Backend Setup

```bash
cd server
npm install

# Create a `.env` file with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret

npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🧪 API Endpoints

Here are some key backend routes:

### Auth
- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Login user

### Books
- `GET /api/books` – Get all books
- `POST /api/books` – Add a book
- `PATCH /api/books/:id` – Update a book
- `DELETE /api/books/:id` – Delete a book

---

## 🔧 Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 🎯 Usage

1. **Register/Login**: Create an account or login to access your personal library
2. **Add Books**: Add books to your collection with details like title, author, genre, etc.
3. **Track Reading**: Mark books as "Read", "Currently Reading", or "Want to Read"
4. **Rate & Review**: Give ratings and write reviews for books you've read
5. **Search**: Find books in your library using the search functionality



---
