# Customer Risk Dashboard

An interactive dashboard built with React, TypeScript, Ant Design, and Recharts to visualize customer financial risk using credit and loan history data.

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/customer-risk-dashboard.git
cd customer-risk-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Backend Server (Assuming Express API)
Make sure your backend API (e.g., Express server) is running at:
```
http://localhost:5000/api/customers
```

If you haven't already created one, you can mock the backend using JSON Server:
```bash
npm install -g json-server
json-server --watch db.json --port 5000
```

### 4. Start the Frontend
```bash
npm start
```

## 📊 Risk Scoring Explanation

The **Risk Score** helps evaluate how financially risky a customer is, based on three key metrics:

### 🔍 Factors Considered:
1. **Missed Loan Repayments**  
   - Each missed payment adds 15 points to the risk.
2. **Credit Score**  
   - Transformed to a risk factor using:  
     `creditRisk = 100 - (creditScore / 10)`
3. **Outstanding Loans vs Income Ratio**  
   - Calculated as:  
     `loanToIncome = (outstandingLoans / monthlyIncome) * 10`

### 📈 Final Risk Formula:
```ts
riskScore = missedPayments * 15 + (100 - creditScore / 10) + (outstandingLoans / monthlyIncome) * 10
```

> The final score is capped at 100.  
> Higher scores = Higher financial risk.

### 🎯 Risk Thresholds:
- 🟢 **0–40** → Low Risk  
- 🟠 **41–70** → Medium Risk  
- 🔴 **71–100** → High Risk

These scores are visualized using progress bars and colored tags for easy interpretation.

## 📦 Tech Stack

- ⚛️ React + TypeScript  
- 💠 Ant Design (UI)  
- 📊 Recharts (Data Visualization)  
- 🌐 Axios (API Calls)  
- 🌓 Tailwind CSS + Dark Mode

## 📍 Features

- Customer data table with inline status controls  
- Dynamic risk score calculation and visualization  
- Income vs Expense trend chart  
- Responsive layout for desktop and mobile

## 🛠 Author & License

MIT License  
Created by Akshat Choudhary
