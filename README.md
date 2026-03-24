# 🚀 Multi-Step Form with Context API

## 📌 Overview

This is a **Multi-Step Form application** built using React that follows a **component-based architecture**. Each input field such as Name, Email, DOB, and Password is designed as a separate reusable component.

The project uses **Context API for global state management**, avoiding prop drilling and making data sharing clean and scalable. It also integrates **LocalStorage** to persist user data and **React Toastify** for user-friendly notifications.

---

## 🎯 Features

* 🔄 Multi-step form navigation (Next / Back)
* 🧩 Separate reusable components for each input
* 🧠 Context API for global state management
* 💾 LocalStorage integration (data persistence)
* 🔔 Toast notifications using React Toastify
* 📋 Final summary page displaying user details
* 🔁 Routing between steps using React Router
* 🚫 No prop drilling (used Context instead)
* 📈 State lifting for better data control

---

## 🧠 Concepts Used

### 1. Component-Based Architecture

Each input is created as a separate component:

* Name.jsx
* Email.jsx
* Dob.jsx
* Password.jsx

This makes the code:

* Reusable
* Clean
* Scalable

---

### 2. Context API

Used a global context (`FormProvider.jsx`) to:

* Store user data
* Share data across components
* Avoid prop drilling

---

### 3. State Lifting

State is managed at a higher level and passed where needed for better control.

---

### 4. Local Storage

User data is stored in LocalStorage so that:

* Data persists even after refresh

---

### 5. React Toastify

Used for showing:

* Success messages
* Step completion alerts
* Submission confirmation

---

### 6. Routing

Used React Router for:

* Navigation between steps
* Back and Next functionality

---

## 📂 Folder Structure

```id="folder123"
Multi-Step Form/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AuthDetails.jsx
│   │   ├── Dob.jsx
│   │   ├── Email.jsx
│   │   ├── Name.jsx
│   │   └── Password.jsx
│   │
│   ├── contexts/
│   │   └── FormProvider.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```id="clone123"
git clone <your-repo-link>
```

### 2. Install dependencies

```id="install123"
npm install
```

### 3. Run the project

```id="run123"
npm run dev
```

---

## 💡 How It Works

1. User enters data step-by-step
2. Data is stored in Context
3. Toast notifications confirm each step
4. Data is saved in LocalStorage
5. Final page shows all user details

---




## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!
