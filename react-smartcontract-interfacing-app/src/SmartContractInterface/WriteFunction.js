import React, { useEffect, useRef, useState } from "react";
import "./Functions.css";

export default function WriteFunction({ functionHeaders, Contract, account }) {
  let inputRefs = useRef([]);
  const [returnValues, setReturnValues] = useState({});

  async function callFunction() {
    let data;
    const sendHeader = { from: account };
    if (functionHeaders.inputs.length === 0) {
      data = await Contract.methods[functionHeaders.name]().send(sendHeader);
    } else if (functionHeaders.inputs.length === 1) {
      data = await Contract.methods[functionHeaders.name](inputRefs.current[0].value).send(sendHeader);
    } else if (functionHeaders.inputs.length === 2) {
      data = await Contract.methods[functionHeaders.name](inputRefs.current[0].value, inputRefs.current[1].value).send(
        sendHeader
      );
    } else if (functionHeaders.inputs.length === 3) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value
      ).send(sendHeader);
    } else if (functionHeaders.inputs.length === 4) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value
      ).send(sendHeader);
    } else if (functionHeaders.inputs.length === 5) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value
      ).send(sendHeader);
    } else if (functionHeaders.inputs.length === 6) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value
      ).send(sendHeader);
    } else if (functionHeaders.inputs.length === 7) {
      data = await Contract.methods[functionHeaders.name](
        inputRefs.current[0].value,
        inputRefs.current[1].value,
        inputRefs.current[2].value,
        inputRefs.current[3].value,
        inputRefs.current[4].value,
        inputRefs.current[5].value,
        inputRefs.current[6].value
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
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
      ).send(sendHeader);
    }

    setReturnValues(data.events);
  }

  return (
    <div>
      <div className="functionName" style={{ background: "green" }}>
        {functionHeaders.name}()
      </div>
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
                type={"number"}
              />
            </>
          );
        })}
      </div>
      <button className="appButton" onClick={() => callFunction()}>
        Write Data
      </button>
      {Object.keys(returnValues).map((event) => {
        if (!Array.isArray(returnValues[event])) {
          let data = Object.keys(returnValues[event].returnValues)
            .filter((x) => isNaN(x))
            .map((x) => `${x}: ${returnValues[event].returnValues[x]}`)
            .join(", ");
          return (
            <div>
              {event}({data})
            </div>
          );
        } else {
          return returnValues[event].map((eventIter) => {
            let data = Object.keys(eventIter.returnValues)
              .filter((x) => isNaN(x))
              .map((x) => `${x}: ${eventIter.returnValues[x]}`)
              .join(", ");
            return (
              <div>
                {event}({data})
              </div>
            );
          });
        }
      })}
    </div>
  );
}
