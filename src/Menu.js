import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        Logo
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>

        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
