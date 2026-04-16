# 🔗 URL Shortener

A full-stack **URL Shortener Web Application** built using **Node.js, Express, MongoDB, and EJS**.  
It allows users to generate short URLs, handle routing and redirection, render dynamic views, and track visit analytics.

---

## 🚀 Features

- 🔗 Generate short URLs from long links  
- 🔁 Redirect users to original URLs  
- 🛣️ Clean routing using Express Router  
- 🖥️ Server-side rendering using EJS  
- 📊 Track total clicks and visit history  
- 📋 Display all shortened URLs in a table  
- ⚡ Fast and lightweight backend using Express  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Templating Engine:** EJS (Server-side rendering)  
- **Others:** ShortID for unique URL generation  

---

## 📁 Project Structure

```bash
URL_Shortener/
│
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── url.js
│   └── staticRoute.js
├── views/
│   └── home.ejs
├── app.js
├── connect.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🧪 Setup Instructions

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
Install dependencies - npm install
Make sure MongoDB is running locally on: mongodb://localhost:27017
Run the server - node app.js
Open in browser - http://localhost:8000
```

---

## ⚙️ How It Works

1. User enters a long URL in the form  
2. Request is handled via **Express routing**  
3. Server generates a unique `shortId`  
4. URL is stored in MongoDB  
5. Response is rendered using **EJS templates**  
6. When a short URL is accessed:
   - Express route handles the request  
   - User is redirected to the original URL  
   - Click timestamp is stored in database  

---

## 🛣️ Routing & Rendering

- Uses **Express Router** to manage modular routes  
- Separate routes for:
  - URL creation (`POST /url`)  
  - Redirection (`GET /url/:shortId`)  
  - Analytics (`GET /url/analytics/:shortId`)  
- Uses **EJS templating engine** for dynamic HTML rendering  
- Data (URLs, clicks) is passed from backend to frontend views  

---

## 🧠 Key Highlights

- Uses **unique short IDs** for URL mapping  
- Implements **modular routing architecture**  
- Performs **server-side rendering with EJS**  
- Tracks **user interaction with timestamps**  
- Follows **MVC design pattern**  
- Efficient handling of dynamic routes and redirects  

---

## 👨‍💻 Author

**Palak Aggarwal**
