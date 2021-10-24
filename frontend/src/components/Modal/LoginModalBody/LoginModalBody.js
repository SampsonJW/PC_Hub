import React, { useState } from "react";
import { Form, Schema, Modal, Button } from "rsuite";

const model = Schema.Model({
  email: Schema.Types.StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required"),
  password: Schema.Types.StringType().isRequired("Password is required."),
});

const LoginModalBody = (props) => {
  const { accepter } = props;
  const submit = () => {
    console.log(email, password);
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
            <Button appearance="primary" type="submit">
              Login
            </Button>
            <Button onClick={props.handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default LoginModalBody;
