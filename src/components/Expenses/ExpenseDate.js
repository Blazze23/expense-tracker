import React from "react";

import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const date = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{date}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
