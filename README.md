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

## ✨ Live Demo

- 🔗 **Frontend (Vercel)**: [https://amrr-techsols-assignment.vercel.app](https://amrr-techsols-assignment.vercel.app)
- 🔗 **Backend API (Render)**: [https://amrr-backend.onrender.com](https://amrr-backend.onrender.com)

---

## 🧩 Getting Started

### 📦 Clone the Repository

```bash
git clone https://github.com/pratham-107/amrr-techsols-assignment.git
cd amrr-techsols-assignment

🔧 Setup Backend
bash
Copy
Edit
cd backend
npm install
🗂️ Create .env file inside backend/:
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password_from_google
TO_EMAIL=receiver@example.com
Start the server:

bash
Copy
Edit
npm start
💻 Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
📬 Enquiry Email Feature
When a user clicks the "Enquire" button:

A POST request is sent to https://amrr-backend.onrender.com/api/enquire

The backend sends an email via Nodemailer using Gmail SMTP

Email includes the item's name

Recipient is defined in TO_EMAIL from .env

📂 Folder Structure
css
Copy
Edit
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
🛡️ Environment Security
.env is added to .gitignore and is never committed

.env.example is included to help others set up their own environment

Secrets like MongoDB URI and email credentials are managed securely

👨‍💻 Developer Info
Pratham Singh
MERN Stack Developer
📧 Email: spratham845@gmail.com
🔗 GitHub: github.com/pratham-107

✅ Final Checklist
 Functional Add & View Items UI

 MongoDB Atlas Integration

 Email Enquiry with Nodemailer

 Protected .env

 Deployment on Render & Vercel

 Clean, professional README

📌 Tip
To test the email feature, ensure your Gmail account allows App Passwords and 2FA is enabled.

csharp
Copy
Edit

### ✅ Now:

1. Save this as `README.md` in the **root directory** of your project.
2. Commit & push:

```bash
git add README.md
git commit -m "Add final professional README"
git push origin main
Let me know if you'd like a custom submission message to send to AMRR or a brief demo script!
