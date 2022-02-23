import React, { useState } from "react";
import SmartContract from "./SmartContract.js";
import "./SmartContracts.css";

const ABIS = require("../ABI/Abis.json");

export default function SmartContracts() {
  const [smartContract, setSmartContract] = useState(undefined);

  return smartContract !== undefined ? (
    <SmartContract functions={smartContract} />
  ) : (
    <>
      {Object.keys(ABIS).map((smartContract) => {
        return (
          <div
            className="contractWrapper"
            onClick={() => {
              setSmartContract(ABIS[smartContract]);
            }}
          >
            {smartContract}
          </div>
        );
      })}
    </>
  );
}
