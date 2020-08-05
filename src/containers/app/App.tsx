import "./App.css";
import React from "react";
import "./App.css";
import styled from "styled-components";

// import { Counter } from "../../components/counter/Counter";
import LoginForm from "../../components/login-form/LoginForm";

const App = () => {
  return (
    <WrapperApp>
      {/* <Counter /> */}
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </WrapperApp>
  );
};

const WrapperApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column-nowrap;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 80%;
`;

export default App;
