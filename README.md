#Expense Tracker (MERN + Redux Toolkit + Tailwind CSS)

A full-stack expense tracker web application built with Node.js, Express, MongoDB, and React using Redux Toolkit for state management and Tailwind CSS for modern responsive design.

It helps users easily manage income and expenses, visualize spending, and make better financial decisions.

---

## Features

Add, edit, and delete transactions (CRUD)  in the backend
Filter transactions by type, category, and date
View total income vs. expense summary
Visual charts (Pie/Bar) using Recharts
Redux Toolkit for global state management  
Fully responsive Tailwind CSS design  
Clean folder structure and maintainable code

---

## Project Structure
## Backend Setup
1. Go to backend folder:
2. Install dependencies: npm install
3. Create .env file: 
Add this
MONGO_URI=mongodb://localhost:27017/expense_tracker
PORT=5000
4. Run server: nodemon server.js

## Frontend Setup

1. Go to frontend folder:
2. Install dependencies:
npm install

3.Run development server:

npm run dev



## API Endpoints
GET Method

`/api/transactions` Fetch all transactions 
`/api/transactions?type=income&category=salary` Filter transactions 

POST Method

`/api/transactions/:id`  Add a new transaction

DELETE Method

`/api/transactions/:id`  Delete transaction 


## Example Request Body
{
  "type": "income",
  "amount": 2000,
  "description": "Freelance Work",
  "category": "Job",
  "date": "2025-11-02"
}

{
  "type": "Expense",
  "amount": 5000,
  "description": "Freelance Work",
  "category": "Job",
  "date": "2025-11-03"
}


