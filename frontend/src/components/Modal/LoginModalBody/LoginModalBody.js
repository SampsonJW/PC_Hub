import React, { useState } from "react";
import axios from "axios";
import { Form, Schema, Modal, Button, ButtonToolbar } from "rsuite";
// import AuthApi from "../../../api/AuthApi";

const model = Schema.Model({
  email: Schema.Types.StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required"),
  password: Schema.Types.StringType().isRequired("Password is required."),
});

const LoginModalBody = (props) => {
  const { accepter } = props;
  const submit = () => {
    let user = {
      Email: email,
      Password: password,
    };
    axios
      .post(`${process.env.REACT_APP_AUTH_API}/auth/login`, user)
      .then((res) => {
        console.log(res);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Modal.Body>
        {props.body}
        <Form fluid model={model} onSubmit={submit}>
          <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              name="email"
              type="email"
              accepter={accepter}
              onChange={(e) => setEmail(e)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control
              name="password"
              type="password"
              accepter={accepter}
              autoComplete="off"
              onChange={(e) => setPassword(e)}
            />
          </Form.Group>
          <Modal.Footer>
            <ButtonToolbar style={{ margin: "0 1rem 0 0" }}>
              <Button appearance="primary" type="submit">
                Login
              </Button>
              <Button onClick={props.handleClose} appearance="subtle">
                Cancel
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default LoginModalBody;
