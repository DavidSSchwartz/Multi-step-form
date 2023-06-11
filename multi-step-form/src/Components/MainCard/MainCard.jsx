import React from "react";
import styled from "styled-components";

function MainCard({ children }) {
  const MainCard = styled.section`
    background: #fff;
    width: 950px;
    height: 550px;
    border-radius: 15px;
    display: flex;
  `;
  return <MainCard>{children}</MainCard>;
}

export default MainCard;
