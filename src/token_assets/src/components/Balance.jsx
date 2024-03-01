import React, { useState } from "react";
import { token } from "../../../declarations/token"
import { Principal } from "@dfinity/principal"

function Balance() {
  const [user, setUser] = useState({
    principalId: null,
    balance: ""
  })
  async function handleClick() {
    const principal = Principal.fromText(user.principalId)
    const tokenName = await token.getSign()
    const userBalance = await token.checkBalanceOf(principal)
    setUser(prevState => ({
      ...prevState,
      balance: userBalance.toLocaleString() + " " + tokenName
    }))
  }

  function handleChange(event) {
    const pId = event.target.value
    console.log(pId)
    setUser(prevState => ({
      ...prevState,
      principalId: pId
    }))
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={user.principalId}
          onChange={handleChange}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p>This account has a balance of {user.balance}.</p>
    </div>
  );
}

export default Balance;
