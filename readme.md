# 🚀 Symposium 2026 Web Portal

A **full-stack, responsive web application** designed for departmental symposiums.  
This platform manages **event showcasing, student registrations, and integrated payment processing** in a streamlined way.

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS (Modern UI/UX)

### Backend
- Node.js
- Express.js

### Database
- Supabase (PostgreSQL)

### Authentication
- Supabase Auth

### Payments
- Razorpay / Stripe Integration

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

The application includes a **persistent Sidebar Navigation** with four main sections.

## 🏠 Home
Displays general symposium information including:
- College Name
- Department
- Event Date
- Technical / Non-Technical highlights
- Quick contact information

## 🎫 Registration
A **multi-step form** where students can:
- Enter personal details
- Select events
- Proceed to payment

## 🏆 Events
Displays a **categorized list of competitions**, including:

### Technical Events
- Coding competitions
- Hackathons
- Technical quizzes
- Paper presentations

### Non-Technical Events
- Gaming competitions
- Photography
- Creative challenges

Each event page includes:
- Description
- Rules
- Participation requirements

## 📞 Contact
Provides **direct communication details** for event coordinators.

Includes:
- Phone numbers
- Email IDs
- Department contact details

---

# ⚙️ Database Schema (Supabase)

The backend uses **Supabase PostgreSQL**. Configure the following tables:

## 1️⃣ `events`
Stores details of all symposium competitions.

| Column | Description |
|------|-------------|
| id | Primary key |
| name | Event name |
| description | Event details |
| rules | Competition rules |
| category | Technical / Non-Technical |

---

## 2️⃣ `registrations`
Stores participant information.

| Column | Description |
|------|-------------|
| id | Primary key |
| name | Student name |
| college | College name |
| email | Email address |
| phone | Phone number |

---

## 3️⃣ `registration_events`
A **junction table** linking participants to their selected events.

| Column | Description |
|------|-------------|
| id | Primary key |
| registration_id | Reference to registrations table |
| event_id | Reference to events table |

---

## 4️⃣ `payments`
Tracks payment transactions.

| Column | Description |
|------|-------------|
| id | Primary key |
| registration_id | Linked participant |
| transaction_id | Payment gateway transaction ID |
| status | Pending / Success |
| amount | Registration fee |

---

# 🚀 Getting Started

## 1️⃣ Prerequisites

Make sure you have:

- **Node.js v18+**
- A **Supabase Project**

---

## 2️⃣ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/symposium-webpage.git
```

Navigate to the project folder:

```bash
cd symposium-webpage
```

Install dependencies:

```bash
npm install
```

---

## 3️⃣ Environment Variables

Create a `.env` file in the root directory and add:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
PAYMENT_GATEWAY_KEY=your_gateway_key
```

---

## 4️⃣ Run the Application

Start the development server:

```bash
npm start
```

The application will run locally at:

```
http://localhost:3000
```

---

# 🛡️ Features

### ⚡ Real-time Updates
Event details are dynamically fetched from **Supabase**.

### 💳 Secure Payments
Integrated payment gateway for handling registration fees.

### 📧 Automated Confirmation
After successful payment:
- A confirmation email is sent
- Implemented using **Node.js + Nodemailer**

### 📱 Mobile Responsive
Fully optimized for:
- Mobile
- Tablet
- Desktop

Using **Tailwind CSS responsive utilities**.

---

# 🤝 Contributing

Contributions are welcome!

If you want to suggest improvements:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

For major changes, **open an issue first** to discuss the proposal.

---

# 📄 License

This project is intended for **academic and symposium use**.
