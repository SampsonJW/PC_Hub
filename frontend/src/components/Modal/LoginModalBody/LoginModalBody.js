import { Form, Schema } from "rsuite";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  email: Schema.Types.StringType().isEmail(
    "Please enter a valid email address."
  ),
});

const LoginModalBody = (props) => {
  return (
    <div>
      <Form model={model}>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          {/* <Form.HelpText tooltip>Email is required</Form.HelpText> */}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginModalBody;
