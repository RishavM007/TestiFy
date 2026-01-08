# TestiFy — Full-Stack Quiz & Assessment Platform

A production-ready quiz platform built with **Next.js** that handles authentication, authorization, quiz creation, and real-time attempts — without falling apart at scale.

---

## About The Project

**TestiFy** is a full-stack quiz and assessment platform designed to simulate real-world testing systems used in ed-tech, hiring platforms, and internal evaluations.

It supports **secure authentication**, **role-based access control (RBAC)**, an **admin dashboard for quiz management**, and **dynamic quiz attempts** stored persistently in **MongoDB**.

This is not a “toy project”.
This is **architecture-first, interview-grade** stuff.

---

## Key Features

### Authentication & Authorization

* Secure login & signup
* Role-Based Access Control (RBAC)

  * **Admin** → Create & manage quizzes
  * **User** → Attempt quizzes & view results

### Admin Panel

* Create questions with multiple options
* Define correct answers
* Manage quizzes without touching the DB directly (as it should be)

### Quiz System

* Dynamic quiz rendering
* User attempts tracked per quiz
* Answer validation & scoring logic
* Attempts stored in MongoDB for analytics & history

### Full-Stack Architecture

* Frontend + Backend in Next.js
* API routes with proper data flow
* Clean separation of concerns

---

## Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js
* MongoDB
* Mongoose

### Auth & Security

* Authentication (Credentials / JWT based)
* RBAC implementation

---

## Project Structure (High Level)

```txt
testify/
├── app/             # Next.js App Router (pages, layouts, routes)
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components
├── context/         # React Contexts (auth, global state)
├── dbConnect/       # MongoDB connection logic
├── models/          # Mongoose schemas & models
├── public/          # Public static files
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Clone the repo

```bash
git clone https://github.com/your-username/testify.git
cd testify
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file:

```env
MONGO_URLI=your_mongodb_connection_string
TOKEN_PASS=your_secret
```

### Run the project

```bash
npm run dev
```

---

## Why This Project Matters

This project demonstrates:

* Real-world full-stack thinking
* Secure auth + RBAC (not just UI buttons pretending to be secure)
* Database-driven dynamic features
* Scalable architecture suitable for SaaS or ed-tech platforms

If you’re an interviewer:
👉 Yes, this is intentional design.
👉 No, this isn’t copied from a tutorial.

---

## Future Improvements

* Timed quizzes
* Analytics dashboard
* Question randomization
* Leaderboards
* OAuth (Google / GitHub)
* Server Actions optimization

---

## Contributing

PRs are welcome.
Open an issue if you find a bug or want to suggest an improvement.

---

## Contact

Built by **Rishav**
If this project caught your eye — that was the point 😉
