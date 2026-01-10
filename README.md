🛒 E-commerce Frontend Application

Frontend e-commerce application built with React and TypeScript.
The project demonstrates a complete frontend architecture including authentication flow, global state management with Redux Toolkit, advanced product filtering & sorting, and shopping cart persistence.

The application has two working modes:
Local development mode (with mock backend)
Production demo on Netlify (using Netlify Functions)

🌍 Live Demo

👉 Netlify demo:
https://ecommerce-ptest.netlify.app/

🚀 Tech Stack

React
TypeScript
Redux Toolkit
React Router
React Hook Form
Material UI (MUI)
CSS Modules
Netlify Functions
mockapi.io (products data)

✨ Features
🔐 Authentication

User registration and login
JWT-based authentication (mocked)
Refresh token handling logic
Logout with token cleanup
Architecture prepared for real backend integration

Authentication implementation:

Local: mock Express server
Netlify demo: Netlify Functions (signup, signin)

⚠️ Authentication Note

Authentication is implemented using a mock backend (Netlify Functions).
User credentials are not persisted in a database.

The login endpoint accepts any credentials and returns a mock JWT token.
This approach is used to demonstrate frontend authentication flow,
token handling, and protected requests without a real backend.

🛍 Products & Filtering

Products fetched from mockapi.io
Category filtering (multi-select with “All” logic, T-shirts, Tops, Trousers)
Price range filtering
Brand filtering (Levi's, Jungmaven)
Gender filtering
Search by name
Sorting and pagination

All filter and sort state is stored globally in Redux.

🔍 Navigation & Product Filtering

The application includes a navigation bar (navbar) with menu items for Men, Women, and Kids.

Each menu item:
Navigates to the products page
Automatically applies a gender-based filter
Updates the Redux filter state accordingly

This allows users to quickly browse products by category directly from the navbar, demonstrating:
Client-side routing
Global state management with Redux Toolkit
Dynamic product filtering based on user navigation

🛒 Shopping Cart

Add / remove products
Increase / decrease quantity
Discount price calculation
Cart persistence using localStorage
Total price calculation

🧠 State Management (Redux Toolkit)

The application uses Redux Toolkit with three main slices:

👤 userSlice

Handles:
Registration and login
JWT token storage
Refresh token logic
User profile update
Password change
Authentication state (loading, errors)

The slice is designed to work with a real backend API and already includes refresh-token retry logic.

🔎 filterSlice

Handles:
Categories
Price ranges
Brands
Gender
Sorting
Pagination
Search query

Keeps filtering logic centralized and predictable.

🛒 cartSlice

Handles:
Cart items
Quantity changes
Discount calculations
Persistent storage in localStorage

🧪 Mock API & Data Sources 
Products:
Loaded from mockapi.io
Used both locally and in Netlify demo for frontend development before backend implementation

Authentication:
Local mode: Express mock server
Production demo: Netlify Functions

Endpoints:
POST /signup — user registration
POST /signin — user login

Mock endpoints return JWT-like tokens to simulate real authentication flow.

🔄 Ready for Real Backend

The project is architected so that:
Mock API endpoints can be replaced with real backend URLs
Token refresh logic already exists
Protected requests support retry after token refresh
Minimal refactoring is required to connect a production backend

🔄 Local vs Netlify Demo
Local Development:
# install dependencies
npm install

# start frontend
npm start

# start mock auth server
node server/index.js

Frontend runs on:
http://localhost:3000

Mock auth server runs on:
http://localhost:5000

🌐 Netlify Production Demo:

Authentication handled via Netlify Functions
No local server required
Same frontend codebase
Same Redux logic
Same token handling flow

This setup demonstrates how the frontend can work with:
Serverless backend
Real production deployment
Minimal changes between environments