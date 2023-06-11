import React from "react";
import styled from "styled-components";
import Step from "./Step";
import { STEP_DATA } from "./constants";

function Steps() {
  const Steps = styled.div`
    padding: 3em 2em;
    display: grid;
    gap: 2em;
  `;

  return (
    <Steps>
      {STEP_DATA.map(({ number, title }, index) => (
        <Step number={number} title={title} key={index}/>
      ))}
    </Steps>
  );
}

export default Steps;
