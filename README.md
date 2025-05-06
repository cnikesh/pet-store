# 🐾 Pet Store E-Commerce Application

An end-to-end online pet store e-commerce platform built using **Nx monorepo**, with a **NestJS** backend and **Angular** frontend. Features include product browsing, secure checkout with **Stripe**, and user authentication/authorization via **Google Firebase**. Built with modern technologies including **PostgreSQL**, **Prisma ORM**, and **GraphQL**.

---

## 🛠️ Tech Stack

### 🔗 Monorepo:
- [Nx](https://nx.dev/) - Build system and monorepo tool

### 🌐 Frontend:
- [Angular](https://angular.io/) - Web UI framework

### 🧠 Backend:
- [NestJS](https://nestjs.com/) - Node.js framework
- [GraphQL](https://graphql.org/) - API query language
- [Prisma](https://www.prisma.io/) - ORM for PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Relational Database

### 💳 Payments:
- [Stripe](https://stripe.com/) - Payment gateway

### 🔐 Authentication:
- [Google Firebase](https://firebase.google.com/) - Auth and user management

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/pet-store.git
cd pet-store
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` files for both backend and frontend apps as needed with Firebase, PostgreSQL, Stripe, and other credentials.

#### Example `.env` for backend:
```
DATABASE_URL="postgresql://username:password@localhost:5432/petstore"
FIREBASE_PROJECT_ID="your-firebase-project-id"
FIREBASE_CLIENT_EMAIL="your-client-email"
FIREBASE_PRIVATE_KEY="your-private-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"
```

---

## 📦 Run the Application

### 🔧 Run Backend (NestJS)
```bash
npx nx serve pet-store-backend
```

### 🌐 Run Frontend (Angular)
```bash
npx nx serve pet-store-web
```

---

## 📁 Project Structure (Nx Monorepo)

```
apps/
├── pet-store-web         # Angular frontend app
└── pet-store-backend     # NestJS backend app

libs/
├── data-access           # Shared GraphQL types, DTOs
├── ui                    # Reusable Angular UI components
└── utils                 # Utility functions for backend/frontend

prisma/
└── schema.prisma         # Prisma schema definition
```

---

## ⚙️ Features

- ✅ User Authentication with Google Firebase
- 🐶 Product Listings (Pet supplies, animals, etc.)
- 📦 Shopping Cart & Checkout
- 💳 Secure Payments via Stripe
- 📊 Admin & User Roles
- 🔄 Realtime updates using GraphQL subscriptions
- 🧪 Modular monorepo setup for scalability

---

## 🧪 Development Tips

- Use Prisma CLI to generate types:
  ```bash
  npx prisma generate
  ```

- Run migrations:
  ```bash
  npx prisma migrate dev
  ```

- Firebase setup should include:
  - Authentication (Google sign-in enabled)
  - Firestore or Realtime Database for extended user/session data (optional)

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📬 Contact

Created by [Your Name](https://github.com/your-username) – feel free to reach out!
