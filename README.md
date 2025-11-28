📘 DatacodeUp Academy – Full-Stack Institute Landing Page

A modern, high-converting landing page for a tech institute featuring a full frontend (Next.js + Tailwind) and backend API (Node.js + Express) for enrollment submissions.

This project includes:

✅ Stunning Hero Section
✅ Interactive Statistics
✅ 6-Month Journey Timeline
✅ Features Grid
✅ Testimonials
✅ Pricing & CTA
✅ Dark Mode Support
✅ Enrollment Modal Form
✅ Backend API for form submissions

🚀 Tech Stack
Frontend

Next.js 14+

React

TailwindCSS

Lucide Icons

Fully responsive UI

Dark mode enabled

Backend

Node.js + Express

CORS enabled

File-based storage (enrollments.json)

Clean modular API route (POST /api/enroll)

📂 Project Structure
my-institute-project/
│
├── frontend/                # Next.js frontend
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx        # Full landing page code
│   ├── public/
│   └── tailwind.config.js
│
├── backend/                 # Node.js backend
│   ├── server.js
│   ├── enrollments.json
│   └── package.json
│
└── README.md

🔧 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/SriHarsha379/my-institute-project.git
cd my-institute-project

2️⃣ Start Backend Server
cd backend
npm install
node server.js


Backend runs at:

👉 http://localhost:5000/api/enroll

3️⃣ Start Frontend App

Open a 2nd terminal:

cd frontend
npm install
npm run dev


Frontend runs at:

👉 http://localhost:3000

📨 API Endpoint (Backend)
Submit Enrollment
POST /api/enroll

Body:
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "9876543210"
}

Success Response:
200 OK
{
  "message": "Enrollment saved successfully"
}

Error Response:
400 Bad Request
{
  "error": "Missing required fields"
}

🌙 Dark Mode Support

The landing page automatically adapts to dark/light themes using:

className="dark:bg-gray-900 dark:text-gray-100"


No setup required.

⭐ Features
🔹 Modern UI/UX

Animations, gradients, Glass UI, clean layout.

🔹 Enrollment Popup

Modal opens when user clicks Apply Now or Enroll.

🔹 Fully Responsive

Mobile-first layout with collapsible navigation.

🔹 Interactive Data

Animated stats (students, placement rate, company partners).

🔹 Real Testimonials

Clean testimonial cards with ratings.

🔹 Backend Storage

Every form submission is written to:

backend/enrollments.json

🧪 Running Production Build
cd frontend
npm run build
npm start

📦 Deployment Instructions
Frontend (Next.js)

Deploy using:

Vercel (recommended)

Netlify

Hostinger / HostingRaja Node Hosting

Backend (Node.js)

Deploy using:

Render.com (free)

Railway.app

DigitalOcean droplet

HostingRaja OVI Node panel

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue to discuss the proposal.

📞 Support

If you need help deploying OR customizing UI:
DM me — I’ll assist with full integration.
