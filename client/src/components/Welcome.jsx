import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUSer }) {
  return (
    <>
      <Container>
        <img src={Robot} alt="robot" />
        <h1>
          Welcome, <span>{currentUSer ? currentUSer.username : ""}!</span>
        </h1>
        <h3>Please select a chat to start messaging.</h3>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    height: 20rem;
  }
  h1 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    span {
      color: #4e00ff;
    }
  }
  h3 {
    megin-top: 1rem;
    font-size: 1.3rem;
    color: #494446;
  }
`;
