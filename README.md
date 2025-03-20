# IT Project - Backend

This is the backend of the project, built with **Node.js**, **Express**, and **TypeScript**, following a **simple Clean Architecture approach** to keep the structure maintainable and scalable.

## 🚀 Features

- **Express.js** for handling HTTP requests.
- **TypeScript** for type safety and better developer experience.
- **Clean Architecture** to separate concerns and improve maintainability.
- **ESLint & Prettier** for code formatting and linting.
- **NVM** to ensure all developers use the same Node.js version.
- **Environment Variables** support with `dotenv`.

---

## 📂 Project Structure

```

/src
/application # Use cases
/domain # Entities (business rules)
/infrastructure # Repositories, external services, etc.
/interfaces # Controllers and routes
/config # Application configurations
/main.ts # Application entry point

```

---

## 🛠️ Setup & Installation

### 1️⃣ **Clone the repository**

```sh
git clone https://github.com/Vives-IT-Project/backend.git
cd backend
```

### 2️⃣ **Use the correct Node.js version**

Make sure you have **NVM (Node Version Manager)** installed.

```sh
nvm use
```

If the required version is not installed, run:

```sh
nvm install
```

### 3️⃣ **Install dependencies**

We use `pnpm` as the package manager. If you don’t have it installed, enable it with:

```sh
corepack enable
```

Then, install the dependencies:

```sh
pnpm install
```

## ▶️ Running the Project

### **Development Mode**

```sh
pnpm dev
```

This starts the server with **nodemon**, automatically restarting on changes.

## 🔍 Linting & Code Formatting

To maintain a **consistent code style**, we use **ESLint and Prettier**. The code will automatically format on save if you have the recommended VS Code extensions installed.

Manually run:

```sh
pnpm lint
```

---

## 🏗️ Recommended VS Code Extensions

For a better development experience, install the following extensions:

- **ESLint**: Helps with code consistency.
- **Prettier**: Ensures automatic code formatting.
- **REST Client**: Easily test API endpoints.
- **DotENV**: Syntax highlighting for `.env` files.
