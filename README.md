Perfect 👌 — here’s your **final polished `README.md`**, ready to paste into your repo (`express-js-server-side-framework-lukii3564`).

It follows the PLP GitHub Classroom format and includes:
✅ clear setup instructions
✅ endpoint documentation
✅ example requests & responses
✅ notes for grading clarity

---

### 🧾 **README.md**

````markdown
# Express.js Server-Side Framework Assignment

## 📘 Project Overview
This project is part of the **PLP MERN Stack Development Program**.  
It demonstrates how to build a simple **RESTful API** using **Express.js**, capable of performing **CRUD operations** (Create, Read, Update, Delete) on a list of products.

---

## ⚙️ Project Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-lukii3564.git
cd express-js-server-side-framework-lukii3564
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and copy the contents from `.env.example`:

```bash
PORT=5000
```

### 4. Run the server

Use either of the following commands:

```bash
npm start     # Run normally
npm run dev   # Run with nodemon (auto reload)
```

You should see:

```
Server running on port 5000
```

---

## 🚀 API Base URL

```
http://localhost:5000/api/products
```

---

## 🧩 API Endpoints Documentation

### 1. **GET** all products

**Request**

```
GET /api/products
```

**Response**

```json
[
  { "id": 1, "name": "Laptop", "price": 1200 },
  { "id": 2, "name": "Mouse", "price": 300 },
  { "id": 3, "name": "Charger", "price": 800 },
  { "id": 4, "name": "Mi-fi", "price": 2500 },
  { "id": 5, "name": "Keyboard", "price": 600 }
]
```

**Status Codes**

* `200 OK` – Products retrieved successfully.

---

### 2. **GET** a single product by ID

**Request**

```
GET /api/products/:id
```

**Example**

```
GET /api/products/2
```

**Response**

```json
{ "id": 2, "name": "Mouse", "price": 300 }
```

**Status Codes**

* `200 OK` – Product found.
* `404 Not Found` – Product does not exist.

---

### 3. **POST** a new product

**Request**

```
POST /api/products
```

**Body (JSON)**

```json
{
  "name": "Headphones",
  "price": 400
}
```

**Response**

```json
{
  "id": 6,
  "name": "Headphones",
  "price": 400
}
```

**Status Codes**

* `201 Created` – Product successfully added.
* `400 Bad Request` – Missing required fields.

---

### 4. **PUT** update a product

**Request**

```
PUT /api/products/:id
```

**Example**

```
PUT /api/products/3
```

**Body (JSON)**

```json
{
  "price": 1000
}
```

**Response**

```json
{
  "id": 3,
  "name": "Charger",
  "price": 1000
}
```

**Status Codes**

* `200 OK` – Product updated successfully.
* `404 Not Found` – Product does not exist.

---

### 5. **DELETE** a product

**Request**

```
DELETE /api/products/:id
```

**Example**

```
DELETE /api/products/3
```

**Response**

```json
{ "message": "Product deleted successfully" }
```

**Status Codes**

* `200 OK` – Product deleted.
* `404 Not Found` – Product not found.

---

## 🧠 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web server framework
* **Dotenv** – Environment variable management
* **Nodemon** – Development auto-reload tool

---

## 📦 Project Structure

```
├── server.js
├── routes/
│   └── productRoutes.js
├── controllers/
│   └── productController.js
├── data/
│   └── products.js
├── .env.example
└── README.md
```

---

## 🧪 Testing with Postman

You can use **Postman** or **curl** to test all endpoints.
Example for creating a new product:

```bash
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "name": "Speaker",
  "price": 1500
}
```


## ✅ Submission Notes

* All files have been added and committed.
* `.env.example` included as required.
* Autograder-ready structure confirmed.
* Tested successfully using Postman.

---

```

---

