// Import React
import React, { useState } from "react";

// Define InterestButton component
function InterestButton(props) {
  // State for interest rate and fees
  const [interestRate, setInterestRate] = useState("");
  const [fees, setFees] = useState("");

  // Event handler for adding interest
  const handleAddInterest = () => {
    if (interestRate !== "") {
      props.onAddInterest(parseFloat(interestRate));
    }
  };

  // Event handler for charging fees
  const handleChargeFees = () => {
    if (fees !== "") {
      props.onChargeFees(parseFloat(fees));
    }
  };

  return (
    <div className="interest-button-container">
      <h2>Actions</h2>
      <div className="mb-3">
        <label htmlFor="interestRate" className="form-label">
          Interest Rate:
        </label>
        <input
          type="number"
          className="form-control"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-3" onClick={handleAddInterest}>
        Add Interest
      </button>
      <div className="mb-3">
        <label htmlFor="fees" className="form-label">
          Fees:
        </label>
        <input
          type="number"
          className="form-control"
          id="fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleChargeFees}>
        Charge Fees
      </button>
    </div>
  );
}

// Export InterestButton component
export default InterestButton;
