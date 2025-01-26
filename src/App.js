// Import React
import React, { useState } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import InterestButton from "./components/InterestButton";
import "./App.css";

// App component
function App() {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert("Insufficient funds!");
    }
  };

  const handleAddInterest = (rate) => {
    const interest = balance * (rate / 100);
    setBalance(balance + interest);
  };

  const handleChargeFees = (fees) => {
    if (fees > balance) {
      setBalance(0);
    } else {
      setBalance(balance - fees);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Banking Application</h1>
      </header>
      <div className="App-main">
        <Balance balance={balance} />
        <TransactionForm
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
        />
        <InterestButton
          onAddInterest={handleAddInterest}
          onChargeFees={handleChargeFees}
        />
      </div>
    </div>
  );
}

// Export App component
export default App;
