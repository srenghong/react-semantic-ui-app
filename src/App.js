import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Login from "./Login";
import Menu from "./Menu";

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Login />
    </Container>
  </Fragment>
);

export default App;
