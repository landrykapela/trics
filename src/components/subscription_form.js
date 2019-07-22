import React from "react";
import {
  FormGroup,
  FormControl,
  Form,
  Spinner,
  Button,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

class SubscriptionForm extends React.Component {
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
            <h2>Service Subscription</h2>
          </FormGroup>
          <FormGroup controlId="name">
            <Form.Label>Service Name</Form.Label>
            <FormControl as="select">
              <option>Domain Registration</option>
              <option>Domain Hosting</option>
              <option>Domain Maintenance</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="price">
            <Form.Label>Service Price (TSH)</Form.Label>
            <FormControl type="number" placeholder="Base Price..." />
          </FormGroup>
          <FormGroup controlId="plan">
            <Form.Label>Customer</Form.Label>
            <FormControl as="select">
              <option>ABC Dental Clinic</option>
              <option>FK Law Chambers</option>
              <option>ITM Tanzania</option>
              <option>Jamirex Hotel</option>
              <option>Lawhill Co. & Advocates</option>
              <option>Open Classrooms</option>
              <option>UBJ Law Chamber</option>
            </FormControl>
          </FormGroup>
          <Button type="submit" controlId="submit">
            Save
          </Button>
        </form>
      </div>
    );
  }
}
export default SubscriptionForm;
