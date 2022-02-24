import React, { useEffect, useState } from "react";
import SmartContract from "./SmartContract.js";
import "./SmartContracts.css";
import Grid from "../Grid.js";
import Web3 from "web3";

const ABIS = require("../ABI/Abis.json");

export default function SmartContracts() {
  const [web3State, setWeb3State] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [smartContract, setSmartContract] = useState(undefined);

  useEffect(() => {
    async function initWeb3() {
      if (ABIS.HttpProvider === "") {
        alert("invalid HTTP Provider, check Abis.json");
        return;
      }
      let _web3 = new Web3(window.ethereum);
      let account = (await _web3.eth.getAccounts())[0];

      for (let contractName of Object.keys(ABIS)) {
        if (contractName !== "HttpProvider") {
          let contractData = ABIS[contractName];
          if (contractData.Address === "" || contractData.ABI.length === 0) {
            alert(`Contract ${contractName} has invalid ABI or Address`);
            return;
          }
          let SmartContract = new _web3.eth.Contract(contractData.ABI, contractData.Address);
          ABIS[contractName]["SmartContract"] = SmartContract;
        }
      }

      setWeb3State(_web3);
      setAccount(account);
    }
    initWeb3();
  }, []);

  return smartContract !== undefined ? (
    <SmartContract smartContract={smartContract} account={account} />
  ) : (
    <Grid>
      {Object.keys(ABIS).map((smartContractName) => {
        if (smartContractName !== "HttpProvider") {
          return (
            <div
              style={smartContractName.length > 25 ? { lineHeight: "7.5vh" } : {}}
              className="contractWrapper"
              key={smartContractName}
              onClick={() => {
                setSmartContract(ABIS[smartContractName]);
              }}
            >
              {smartContractName}
            </div>
          );
        }
      })}
    </Grid>
  );
}
