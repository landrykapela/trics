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

class ServiceForm extends React.Component {
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
            <h2>New Service Registration</h2>
          </FormGroup>
          <FormGroup controlId="name">
            <Form.Label>Service Name</Form.Label>
            <FormControl type="text" placeholder="Name..." />
          </FormGroup>

          <FormGroup controlId="price">
            <Form.Label>Service Price (TSH)</Form.Label>
            <FormControl type="number" placeholder="Base Price..." />
          </FormGroup>
          <FormGroup controlId="plan">
            <Form.Label>Base Period</Form.Label>
            <FormControl as="select">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
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
export default ServiceForm;
