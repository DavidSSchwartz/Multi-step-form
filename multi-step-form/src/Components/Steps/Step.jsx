import React from "react";
import styled from "styled-components";

function Step({ number, title }) {
  const Step = styled.div`
    height: 35px;
    display: flex;
    gap: 1em;
  `;
  const Number = styled.div`
    border: 1.5px solid #fff;
    border-radius: 50%;
    height: 100%;
    width: 35px;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: 500;
  `;
  const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  `;
  const Count = styled.div`
    color: #c4c2c2;
    font-size: .8em;
  `;
  const Title = styled.div`
    color: #fff;
    font-size: 1em;
    font-weight: 700;
  `;

  return (
    <>
      <Step>
        <Number>{number}</Number>
        <Text>
          <Count>STEP {number}</Count>
          <Title>{title.toUpperCase()}</Title>
        </Text>
      </Step>
    </>
  );
}

export default Step;
