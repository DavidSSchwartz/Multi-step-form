import styled from "styled-components";
import borderImage from "/assets/images/bg-sidebar-desktop.svg";
import Steps from "../Steps";

const StepContainer = () => {

  const Border = styled.div`
    background-image: url(${borderImage});
    height: 518px;
    width: 250px;
    margin: 1em;
    background-size: cover;
  `;

  return (
    <>
      <Border>
        <Steps />
      </Border>
    </>
  );
};

export default StepContainer;
