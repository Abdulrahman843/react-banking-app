// Import React
import React, { useState } from "react";

// TransactionForm component
// Props:
// - onDeposit: Function to handle depositing money
// - onWithdraw: Function to handle withdrawing money
function TransactionForm(props) {
  // State variables for deposit and withdrawal amounts
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  // Event handler function for deposit form submission
  const handleDeposit = (e) => {
    e.preventDefault();
    if (depositAmount !== "") {
      props.onDeposit(parseFloat(depositAmount));
      setDepositAmount("");
    }
  };

  // Event handler function for withdrawal form submission
  const handleWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount !== "") {
      props.onWithdraw(parseFloat(withdrawAmount));
      setWithdrawAmount("");
    }
  };

  return (
    <div className="transaction-form-container">
      <h2>Transactions</h2>
      <form onSubmit={handleDeposit}>
        <div className="mb-3">
          <label htmlFor="depositAmount" className="form-label">
            Deposit Amount:
          </label>
          <input
            type="number"
            className="form-control"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Deposit
        </button>
      </form>
      <form onSubmit={handleWithdraw}>
        <div className="mb-3">
          <label htmlFor="withdrawAmount" className="form-label">
            Withdraw Amount:
          </label>
          <input
            type="number"
            className="form-control"
            id="withdrawAmount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Withdraw
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
