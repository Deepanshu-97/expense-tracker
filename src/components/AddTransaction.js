import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { getTimestamp } from "../utils/time";

export const AddTransaction = () => {
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState();

  const { createTransaction } = useContext(GlobalContext);

  const onSubmit = (e, type) => {
    e.preventDefault();
    if (amount > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        amount: type === "remove" ? -amount : +amount,
        timestamp: getTimestamp(),
      };

      createTransaction(newTransaction);
      setAmount("");
      setErr();
    } else setErr("Amount should be greater than 0");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          {err && <span className="err">{err}</span>}
        </div>
        <input
          type="submit"
          value="Add"
          className="btn add-btn"
          onClick={(e) => onSubmit(e, "add")}
        />
        <input
          type="submit"
          value="Remove"
          className="btn remove-btn"
          onClick={(e) => onSubmit(e, "remove")}
        />
      </form>
    </>
  );
};
