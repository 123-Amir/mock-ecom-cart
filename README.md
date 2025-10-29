# Live - https://mock-ecom-cart-navy.vercel.app/
🛒 Mock E-Commerce Cart
A simple full-stack mock e-commerce shopping cart application built with React (frontend) and Express (Node.js) (backend).

🚀 Features
Product Listing: View products with images, search, and filter.

Add to Cart: Instantly add products to cart from the homepage.

Cart Management: Adjust quantity, remove items, view total cost.

Checkout Flow: Place order with name/email/address, see order receipt.

Backend API: Node+Express REST API for products and cart.

Frontend UI: React, completely responsive design.
No Database Requirement: Everything runs in-memory for fast testing.

📂 Project Structure
mock-ecom-cart/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── .gitignore
├── README.md

⚡️ How To Run Locally
1. Clone Project
git clone https://github.com/<your-username>/mock-ecom-cart.git
cd mock-ecom-cart

3. Start Backend
cd backend
npm install
node server.js
Backend API runs at: http://localhost:5000/api

4. Start Frontend
cd ../frontend
npm install
npm start
Frontend runs at: http://localhost:3000

🧪 Testing Features
Add/remove items from cart

Quantity update works live

Cart total real-time updates

Checkout places order and clears cart

Images load via dummyimage.com

🌍 Deployment
For full-stack deploy:

Backend: https://mock-ecom-cart.onrender.com

Frontend: (https://mock-ecom-cart-navy.vercel.app/)
