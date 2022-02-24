import React, { useState, useRef } from "react";
import "./Functions.css";

const inputTypeMapper = {
  uint8: "number",
  uint16: "number",
  uint64: "number",
  uint80: "number",
  uint256: "number",
  int8: "number",
  int16: "number",
  int64: "number",
  int80: "number",
  int256: "number",
  string: "text",
  address: "text",
  bytes: "text",
  boolean: "checkbox",
};

export default function ReadFunction({ functionHeaders, Contract }) {
  let inputRefs = useRef([]);
  const [returnValue, setReturnValue] = useState({});

  async function callFunction() {
    let data;
    if (functionHeaders.inputs.length === 0) {
      data = await Contract.methods[functionHeaders.name]().call();
    } else if (functionHeaders.inputs.length === 1) {
      data = await Contract.methods[functionHeaders.name](inputRefs.current[0].value).call();
    } else if (functionHeaders.inputs.length === 2) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value
      ).call();
    } else if (functionHeaders.inputs.length === 3) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value
      ).call();
    } else if (functionHeaders.inputs.length === 4) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value
      ).call();
    } else if (functionHeaders.inputs.length === 5) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value
      ).call();
    } else if (functionHeaders.inputs.length === 6) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value
      ).call();
    } else if (functionHeaders.inputs.length === 7) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value
      ).call();
    } else if (functionHeaders.inputs.length === 8) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value
      ).call();
    } else if (functionHeaders.inputs.length === 9) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value
      ).call();
    } else if (functionHeaders.inputs.length === 10) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value
      ).call();
    } else if (functionHeaders.inputs.length === 11) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value
      ).call();
    } else if (functionHeaders.inputs.length === 12) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value,
        inputRefs.current[11].value
      ).call();
    } else if (functionHeaders.inputs.length === 13) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value,
        inputRefs.current[11].value,
        inputRefs.current[12].value
      ).call();
    } else if (functionHeaders.inputs.length === 14) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value,
        inputRefs.current[11].value,
        inputRefs.current[12].value,
        inputRefs.current[13].value
      ).call();
    } else if (functionHeaders.inputs.length === 15) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value,
        inputRefs.current[11].value,
        inputRefs.current[12].value,
        inputRefs.current[13].value,
        inputRefs.current[14].value
      ).call();
    } else if (functionHeaders.inputs.length === 16) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value,
        inputRefs.current[7].value,
        inputRefs.current[8].value,
        inputRefs.current[9].value,
        inputRefs.current[10].value,
        inputRefs.current[11].value,
        inputRefs.current[12].value,
        inputRefs.current[13].value,
        inputRefs.current[14].value,
        inputRefs.current[15].value
      ).call();
    }

    setReturnValue(data);
  }

  return (
    <div>
      <div className="functionName">{functionHeaders.name}()</div>
      <div className="functionWrapper">
        {functionHeaders.inputs.map((input) => {
          return (
            <>
              <div style={{ border: "1px solid black" }}>{input.name}</div>
              <div style={{ border: "1px solid black" }}>{input.type}</div>
              <input
                ref={(e) => {
                  inputRefs.current.push(e);
                }}
                style={{ border: "1px solid black" }}
                type={inputTypeMapper[input.type]}
              />
            </>
          );
        })}
      </div>
      <button className="appButton" onClick={() => callFunction()}>
        Read Data
      </button>
      {typeof returnValue == "object" ? (
        Object.keys(returnValue).map((key) => {
          return <div>{returnValue[key]}</div>;
        })
      ) : (
        <div>{returnValue}</div>
      )}
    </div>
  );
}
