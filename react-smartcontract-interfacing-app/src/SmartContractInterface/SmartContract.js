import React, { useEffect } from "react";
import ReadFunction from "./ReadFunction.js";
import WriteFunction from "./WriteFunction.js";
import "./SmartContract.css";

export default function SmartContract({ smartContract, account }) {
  return (
    <div className="smartContractWrapper">
      {smartContract.ABI.map((f) => {
        if (f.stateMutability === "view")
          return <ReadFunction key={f.name} functionHeaders={f} Contract={smartContract.SmartContract} />;
        else if (f.stateMutability === "nonpayable" || f.stateMutability === "payable")
          return (
            <WriteFunction key={f.name} functionHeaders={f} Contract={smartContract.SmartContract} account={account} />
          );
      })}
    </div>
  );
}
