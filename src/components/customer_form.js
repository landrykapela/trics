import React from "react";
import {
  FormGroup,
  FormControl,
  Form,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Button
} from "react-bootstrap";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="form-container">
        <div className="controls">
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip id="close-tip">close</Tooltip>}
          >
            <i className="fa fa-close" />
          </OverlayTrigger>
        </div>
        <form>
          <FormGroup>
            <h2>New Customer Registration</h2>
          </FormGroup>
          <FormGroup controlId="name">
            <Form.Label>Customer Name</Form.Label>
            <FormControl type="text" placeholder="Name..." />
          </FormGroup>
          <FormGroup controlId="email">
            <Form.Label>E-mail Address</Form.Label>
            <FormControl type="email" placeholder="E-mail..." />
          </FormGroup>
          <FormGroup controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <FormControl type="number" placeholder="Phone..." />
          </FormGroup>
          <FormGroup controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <FormControl as="textarea" rows="5" />
          </FormGroup>
          <Button type="submit" controlId="submit">
            Save
          </Button>
        </form>
      </div>
    );
  }
}
export default CustomerForm;
