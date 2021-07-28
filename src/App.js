import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";
import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
};

export default App;
