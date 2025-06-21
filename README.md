# 🛍️ AMRR TechSols Internship Assignment – Item Listing Website

This is a full-stack MERN (MongoDB, Express, React, Node.js) application built as part of the AMRR TechSols internship assignment. The project allows users to add items and view them in a modern, responsive interface with image carousels and enquiry functionality.

The application has two main pages:
- **Add Item**: A form to submit item details (name, type, description, cover image, and additional images).
- **View Items**: Displays a list of items added. Clicking on an item opens a modal with full details and an image carousel.

Bonus features implemented include:
- ✅ MongoDB integration to persist data
- ✅ Email functionality using Nodemailer on enquiry
- ✅ Validation of image URLs
- ✅ Attractive Bootstrap-based UI
- ✅ Deployment-ready structure

---

## 🧪 Features Overview

- Add new items with multiple images
- View list of items with cover images
- Modal popup with:
  - Full description
  - Carousel of cover and additional images
  - "Enquire" button to trigger email
- Email is sent using Nodemailer (SMTP via Gmail App Password)
- Image URL validation using Regex
- Responsive, mobile-friendly UI with Bootstrap
- Backend + Frontend folder separation
- Clean code, modular structure

---

## 🧱 Tech Stack

- **Frontend:** React.js (Vite), Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Email Service:** Nodemailer + Gmail App Password
- **Deployment (Optional):** Vercel (Frontend), Render (Backend)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/amrr-techsols-assignment.git
cd amrr-techsols-assignment

Setup backend----->
cd backend
npm install

Create a .env file inside the backend folder with the following content:---->
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password_from_google
TO_EMAIL=staticReceiver@example.com

npm start


Setup frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev

amrr-techsols-assignment/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env.example
├── frontend/
│   ├── components/
│   ├── main.jsx
│   └── App.jsx
├── .gitignore
├── README.md


📬 Enquiry Email
When a user clicks on "Enquire", the app sends a POST request to the backend:

Backend endpoint: POST /api/enquire

Email is sent using Nodemailer with Gmail SMTP

Includes item name in the email content

Recipient email is set in .env as TO_EMAIL

✅ Environment Protection
.env file is ignored via .gitignore

.env.example is shared for reference

No sensitive information is committed


✨ Live Demo
(Add these links if deployed)
🔗 Frontend (Vercel): https://amrr-techsols-assignment.vercel.app/
🔗 Backend API (Render): https://amrr-backend.onrender.com

👨‍💻 Developer Info
Pratham Singh
React.js | MERN Stack Developer
📧 spratham845@gmail.com
🔗 GitHub: https://github.com/pratham-107


---

### ✅ After Copying:

1. Paste it into `README.md` in your root directory
2. Replace:
   - GitHub repo URL
   - Your deployment links (if live)
   - Your Mongo URI placeholders
3. Commit & push:

```bash
git add README.md
git commit -m "Add final full README for internship assignment"
git push



