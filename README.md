🧠 TestiFy — Full-Stack Quiz & Assessment Platform

A production-ready quiz platform built with Next.js that handles authentication, authorization, quiz creation, and real-time attempts — without falling apart at scale.

🚀 About The Project

TestiFy is a full-stack quiz and assessment platform designed to simulate real-world testing systems used in ed-tech, hiring platforms, and internal evaluations.

It supports secure authentication, role-based access control (RBAC), an admin dashboard for quiz management, and dynamic quiz attempts stored persistently in MongoDB.

This is not a “toy project”. This is architecture-first, interview-grade stuff.

✨ Key Features
🔐 Authentication & Authorization

Secure login & signup

Role-Based Access Control (RBAC)

Admin → Create & manage quizzes

User → Attempt quizzes & view results

🛠 Admin Panel

Create questions with multiple options

Define correct answers

Manage quizzes without touching the DB directly (as it should be)

📝 Quiz System

Dynamic quiz rendering

User attempts tracked per quiz

Answer validation & scoring logic

Attempts stored in MongoDB for analytics & history

🧱 Full-Stack Architecture

Frontend + Backend in Next.js

API routes with proper data flow

Clean separation of concerns

🧑‍💻 Tech Stack

Frontend

Next.js (App Router)

React

TypeScript

Tailwind CSS

Backend

Next.js API Routes

MongoDB

Mongoose

Auth & Security

Authentication (Credentials / JWT based)

RBAC implementation

🗂 Project Structure (High Level)
testify/
├── app/            # Next.js App Router
├── components/     # Reusable UI components
├── models/         # Mongoose schemas
├── api/            # Backend API routes
├── lib/            # Utilities & helpers
├── styles/         # Global styles
└── README.md

⚙️ Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/testify.git
cd testify

2️⃣ Install dependencies
npm install

3️⃣ Environment variables

Create a .env.local file:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

4️⃣ Run the project
npm run dev

🎯 Why This Project Matters

This project demonstrates:

Real-world full-stack thinking

Secure auth + RBAC (not just UI buttons pretending to be secure)

Database-driven dynamic features

Scalable architecture suitable for SaaS or ed-tech platforms

If you’re an interviewer:
👉 Yes, this is intentional design.
👉 No, this isn’t copied from a tutorial.

🔮 Future Improvements

Timed quizzes

Analytics dashboard

Question randomization

Leaderboards

OAuth (Google / GitHub)

Server Actions optimization

🤝 Contributing

PRs are welcome. Open an issue if you find a bug or want to suggest an improvement.

📬 Contact

Built by Rishav
If this project caught your eye — that was the point 😉
