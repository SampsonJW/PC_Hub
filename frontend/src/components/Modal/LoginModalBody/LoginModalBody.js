import React, { useState } from "react";
import { Form, Schema, Modal, Button } from "rsuite";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  email: Schema.Types.StringType().isEmail(
    "Please enter a valid email address."
  ),
});

const LoginModalBody = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Modal.Body>
        {props.body}

        <Form model={model}>
          <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              name="email"
              type="email"
              onChange={(e) => setEmail(e)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control
              name="password"
              type="password"
              autoComplete="off"
              onChange={(e) => setPassword(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button appearance="primary">Ok</Button>
        <Button onClick={props.handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default LoginModalBody;
