# Node.js Backend Authentication API

## 🚀 **Overview**
This project is a **Node.js backend authentication API** that enables users to:
- **Sign up** with email verification.
- **Log in** with secure authentication.
- Access **role-based protected routes** (RBAC) where only admins or super admins can view certain endpoints.

---

## 🔑 **Features**
- **User Registration:** Sign up with email verification using Mailtrap.
- **Email Verification:** Users must verify their email before logging in.
- **Login:** Secure JWT-based authentication.
- **Role-Based Access Control (RBAC):**
  - Certain routes (e.g., `/users`) are accessible only by admins.
  - Users are assigned roles: `user`, `admin`, or `super-admin`.
- **Protected Routes:** Routes are secured with authentication and role checks.
- **Admin Creation:** Easily create admin or super admin accounts via a script.

---

## 📂 **Project Structure**
```
├── controllers/        # Route handlers (e.g., userController.js)
├── middleware/         # Authentication & role-based middleware
├── models/             # Mongoose schemas (e.g., User.js)
├── routes/             # Route definitions (e.g., userRoutes.js)
├── scripts/            # Scripts to manage roles (e.g., addAdmin.js)
├── utils/              # Utility functions (e.g., sendEmail.js)
├── .env.example        # Environment variables example
├── package.json        # Project dependencies and scripts
└── server.js           # Entry point of the application
```

---

## ⚙️ **Getting Started**

### 1. **Clone the Repository**
```bash
git clone https://github.com/atta541/Auth-RBAC.git
cd Auth-RBAC
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Environment Setup**
- Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
- Add your credentials to the `.env` file:
  - **MongoDB connection string**
  - **JWT secret**
  - **Mailtrap credentials**
  - **Admin credentials**

### 4. **Run the Server**
```bash
npm start
```

---

## 🛡️ **Routes & Access**
| Route                      | Method | Access        | Description                              |
|----------------------------|--------|---------------|------------------------------------------|
| `/api/users/register`      | POST   | Public        | User registration with email verification |
| `/api/users/login`         | POST   | Public        | User login after verification            |
| `/api/users`               | GET    | Admin only    | View all users                           |
| `/api/users/:id`           | GET    | Authenticated | Get user by ID                           |
| `/api/users/verify-email/:token` | GET    | Public        | Verify user email with token              |
---

## 🧑‍💼 **Creating Admin or Super Admin**
To create an admin or super admin:
1. Ensure your `.env` has admin credentials.
2. Run the script:
```bash
node scripts/addAdmin.js
```
This will create an admin with the specified credentials in the `.env` file.

---

## 📧 **Email Verification**
- Upon registration, an email is sent via Mailtrap with a verification link.
- Clicking the link verifies the user's account.
- Only verified users can log in.

---

## 📄 **.env Example**
```env
PORT=3001
DB_URL=mongodb://127.0.0.1:27017/student
JWT_SECRET=your-secret-key
ADMIN_NAME=admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=adminstrongpassword
# Mailtrap Credentials
MAIL_USER=your_mailtrap_user
MAIL_PASS=your_mailtrap_pass
```

---

## 🚀 **License**
This project is licensed under the MIT License.

## 🤝 **Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 🙌 **Contact**
For questions or support, reach out at [attareh542@gmail.com](mailto:attareh542@gmail.com).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/atta-ur-rehman-4104b1181/)

---

> ⭐ **Don't forget to star this repo if you find it helpful!**

