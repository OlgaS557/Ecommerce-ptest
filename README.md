🛒 E-commerce Frontend Application

Frontend e-commerce application built with React and TypeScript.
The project demonstrates authentication flow, state management with Redux Toolkit, filtering logic, and shopping cart persistence.
Authentication is implemented using a mock API, while product data is loaded from mockapi.io.

🚀 Tech Stack

React
TypeScript
Redux Toolkit
React Router
React Hook Form
CSS Modules
Express (mock server for auth)
mockapi.io (products data)

✨ Features
🔐 Authentication

User registration and login
JWT-based authentication
Refresh token handling logic
Logout with token cleanup
Prepared architecture for real backend integration
Authentication requests are handled via a local mock Express server, which simulates real backend responses.

🛍 Products & Filtering

Products fetched from mockapi.io
Category filtering (multi-select with “All” logic)
Price range filtering
Brand filtering
Gender filtering
Search by name
Sorting and pagination
All filter state is stored globally in Redux.

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

🧪 Mock API
Authentication (Express mock server)

POST /api/signup — user registration
POST /api/signin — user login

The mock server returns JWT-like tokens to simulate real authentication flow.

Products:
Loaded from mockapi.io
Used for frontend development before backend implementation

🔄 Ready for Real Backend

The project is architected so that:
Mock API endpoints can be replaced with real backend URLs
Token refresh logic already exists
Protected requests support retry after token refresh
Minimal refactoring is required to connect a production backend

▶️ Getting Started
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