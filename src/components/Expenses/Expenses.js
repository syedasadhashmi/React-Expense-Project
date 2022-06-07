import React, { useState } from "react";
import "./Expenses.css";

import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterDataHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredArray = props.items.filter((newFiltered) => {
    return newFiltered.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterData={onFilterDataHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpenseList items={filteredArray} />
      </Card>
    </div>
  );
};
export default Expenses;
