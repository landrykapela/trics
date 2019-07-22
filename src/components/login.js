import React from "react";
import { FormGroup, FormControl, Spinner, Button } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <FormGroup controlId="username">
            <FormControl type="text" placeholder="Username..." />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl type="password" placeholder="Password..." />
          </FormGroup>

          <Button type="submit" variant="success">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
