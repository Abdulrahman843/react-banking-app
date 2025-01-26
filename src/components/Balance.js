// Import React
import React from "react";

// Props:
// - balance: The current balance to display
function Balance(props) {
  return (
    <div className="balance-container">
      <h2>Current Balance</h2>
      <p>£{props.balance.toFixed(2)}</p>
    </div>
  );
}

// Export Balance component
export default Balance;
