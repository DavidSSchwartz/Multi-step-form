import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  const LayoutCard = styled.div`
    display: grid;
    place-items: center;
  `;
  return <LayoutCard>{children}</LayoutCard>;
}

export default Layout;
