import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/UI/Footer";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Diver Watch",
    amount: 309.99,
    date: new Date(2021, 11, 24),
  },
  {
    id: "e2",
    title: '32" Wide Screen Monitor',
    amount: 414.99,
    date: new Date(2021, 10, 20),
  },
  {
    id: "e3",
    title: "Computer Desk",
    amount: 120.0,
    date: new Date(2021, 9, 10),
  },
  {
    id: "e4",
    title: "JBL Bluetooth speaker",
    amount: 219.99,
    date: new Date(2020, 6, 6),
  },
  {
    id: "e5",
    title: "Car Repair",
    amount: 150.0,
    date: new Date(2022, 1, 19),
  },
  {
    id: "e6",
    title: "Computer Chair",
    amount: 249.99,
    date: new Date(2022, 1, 21),
  },
  {
    id: "e7",
    title: "Ski Vacation",
    amount: 550,
    date: new Date(2022, 0, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="body-content">
      <h1 className="header">Expenses Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
}

export default App;
