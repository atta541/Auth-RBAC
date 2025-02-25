Here’s the updated README with the **Customer Module** included:

---

# Node.js Backend Authentication & Customer Management API

## 🚀 **Overview**  
This project is a **Node.js backend API** that enables:  
- **User Authentication** with email verification.  
- **Role-Based Access Control (RBAC)** for protected routes.  
- **Customer Management** with CRUD operations.  

---

## 🔑 **Features**  
### 🧑‍💻 **User Authentication**  
- **User Registration:** Email verification via Mailtrap.  
- **Login:** Secure JWT-based authentication.  
- **Role-Based Access Control (RBAC):**  
  - Roles: `user`, `admin`, `super-admin`  
  - Admin-only routes for user management.  

### 🧾 **Customer Management**  
- **Create, Read, Update, Delete (CRUD)** customer data.  
- **Protected Routes:** Only authenticated users can manage customers.  

---

## 📂 **Project Structure**  
```
├── controllers/        # Route handlers (e.g., userController.js, customerController.js)
├── middleware/         # Auth & role-based middlewares
├── models/             # Mongoose schemas (User.js, Customer.js)
├── routes/             # Routes (userRoutes.js, customerRoutes.js)
├── scripts/            # Scripts (e.g., addAdmin.js)
├── utils/              # Utility functions (e.g., sendEmail.js)
├── .env.example        # Environment variables example
├── package.json        # Dependencies and scripts
└── server.js           # Application entry point
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
```bash
cp .env.example .env  
```
Edit `.env` with:  
- **MongoDB URI**  
- **JWT Secret**  
- **Mailtrap Credentials**  
- **Admin Credentials**  

### 4. **Run the Server**  
```bash
npm start  
```

---

## 🛡️ **Routes & Access**  

### 🧑‍💻 **User Routes**  
| Route                             | Method | Access        | Description                              |
|-----------------------------------|--------|---------------|------------------------------------------|
| `/api/users/register`            | POST   | Public        | User registration with email verification |
| `/api/users/login`               | POST   | Public        | User login after verification            |
| `/api/users`                     | GET    | Admin only    | View all users                           |
| `/api/users/:id`                 | GET    | Authenticated | Get user by ID                           |
| `/api/users/verify-email/:token` | GET    | Public        | Verify user email with token             |

### 📦 **Customer Routes**  
| Route                | Method | Access        | Description               |
|----------------------|--------|---------------|---------------------------|
| `/api/customers/`    | POST   | Authenticated | Create a new customer     |
| `/api/customers/:id` | GET    | Authenticated | Get customer by ID       |
| `/api/customers/:id` | PUT    | Authenticated | Update customer details  |
| `/api/customers/:id` | DELETE | Authenticated | Delete customer          |

---

## 🧑‍💼 **Creating Admin or Super Admin**  
```bash
node scripts/addAdmin.js  
```
- Ensure `.env` has admin credentials before running the script.  

---

## 📧 **Email Verification**  
- Registration triggers a verification email via Mailtrap.  
- Users must verify their email to log in.  

---

## 📄 **.env Example**  
```env
PORT=3001
DB_URL=mongodb://127.0.0.1:27017/student
JWT_SECRET=your-secret-key
ADMIN_NAME=admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=adminstrongpassword
MAIL_USER=your_mailtrap_user
MAIL_PASS=your_mailtrap_pass
```

---

## 🚀 **License**  
This project is licensed under the MIT License.  

## 🤝 **Contributing**  
Contributions are welcome! Submit issues or pull requests.  

## 🙌 **Contact**  
📧 [attareh542@gmail.com](mailto:attareh542@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/atta-ur-rehman-4104b1181/)  

> ⭐ **Star this repo if you found it helpful!**  

---

