# 🏆 Sporty-Bros

Sporty-Bros is an advanced sports gear rental platform that allows users to browse, rent, and manage their favorite sports equipment with ease.

## 🔗 Live Demo  
[![Live Site](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue)](https://assignment-10-55618.web.app/)

## ✨ Features  
✅ **Authentication Features** – Secure login/signup with Firebase authentication.  
✅ **Protected Routes** – Implemented using `<PrivateRoute>` to restrict access.  
✅ **Client-Server Integration** – Seamless connection to the backend.  
✅ **Notifications** – Integrated Hot Toast and SweetAlert 2 for better user feedback.  
✅ **Sorting & Tooltips** – Users can sort items by price and utilize React Tooltip.  
✅ **Animations** – Enhanced UI with React Awesome Reveal.  
✅ **Dark/Light Mode** – Users can toggle between themes for a personalized experience.  

## 🛠️ Technology Stack  

| Category         | Technologies Used |
|-----------------|------------------|
| **Frontend**    | Next.js, React, TypeScript, Tailwind CSS, ShadCN, Framer Motion |
| **Backend**     | Next.js API Routes, Prisma, Zod |
| **Database**    | MongoDB (Mongoose) |
| **Authentication** | Firebase Auth |
| **File Uploads** | UploadThing |
| **Payments**    | Stripe |
| **Email Service** | Resend |
| **Hosting**     | Vercel |

## 🛠 Installation  

### **Prerequisites**  
- Node.js (>= 18)  
- MongoDB Database  
- Firebase Authentication  
- Stripe Account  

### **Steps**  

#### 1️⃣ Clone the repository  
```sh
git clone https://github.com/your-username/sporty-bros.git
cd sporty-bros

#### 2️⃣ Install dependencies  
```sh
npm install
```

#### 3️⃣ Set up environment variables (see `.env.example` below)  

#### 4️⃣ Run the development server  
```sh
npm run dev
```

## ⚙️ Configuration (`.env`)  
Create a `.env` file in the root directory and configure the following:

```env
# Firebase Authentication
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# UploadThing API Keys
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Database Configuration
MONGODB_URI=your_mongodb_connection_url

# Stripe API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Server Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

🚨 **Important:** Never expose your `.env` file in public repositories. Add it to `.gitignore` to keep it secure.

## 🚀 Usage  

1️⃣ **Browse Products** – Explore various sports gear available for rent.  
2️⃣ **User Authentication** – Sign up/log in via Firebase.  
3️⃣ **Place an Order** – Secure checkout using Stripe.  
4️⃣ **Order Confirmation** – Get a confirmation email and manage your rentals.  

## 🌍 Live Demo & Repository  

🔗 **Live Site:** [Sporty-Bros](https://assignment-10-55618.web.app/)  
📦 **GitHub Repository:** [GitHub Link](https://github.com/your-username/sporty-bros)  

---

🚀 **Enjoy renting your favorite sports gear with Sporty-Bros!** 🎾🏀⚽