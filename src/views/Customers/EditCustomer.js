import React, { Component } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class EditCustomer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      customerID: null
    };
  }

  componentDidMount() {

    let customerID = window.location.pathname.split("/").pop()
    axios.get(process.env.REACT_APP_API_URL + `Customers/${customerID}`)
      .then((response) => {      
        console.log(response.data)
        if (response.data.status == 200)
        {
          let customer = response.data.customer[0]
          this.setState(
            {
              customerID: customer.Id,
              lastName: customer.LastName,
              firstName: customer.FirstName,
              fullName: customer.Fullname
            }
          )
        }
        
    }).catch((error) => {
        console.log(error)
    })
  }
  render() {
    const {customerID, lastName, firstName, fullName} = this.state
    return (
      <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Επεξεργασία στοιχείων πελάτη</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="2">
                    <Form.Group>
                      <label>ID</label>
                      <Form.Control
                        defaultValue={customerID}
                        disabled
                        placeholder="Id"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="3">
                    <Form.Group>
                      <label>ΟΝΟΜΑ</label>
                      <Form.Control
                        defaultValue={firstName}
                        placeholder="Όνομα"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <Form.Group>
                      <label>
                        ΕΠΩΝΥΜΟ
                      </label>
                      <Form.Control
                        defaultValue={lastName}
                        placeholder="Επώνυμο"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>
                        ΟΝΟΜΑΤΕΠΩΝΥΜΟ
                      </label>
                      <Form.Control
                        defaultValue={fullName}
                        placeholder="Ονοματεπώνυμο"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                        defaultValue="Mike"
                        placeholder="Company"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        defaultValue="Andrew"
                        placeholder="Last Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Address</label>
                      <Form.Control
                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        placeholder="Home Address"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>City</label>
                      <Form.Control
                        defaultValue="Mike"
                        placeholder="City"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Country</label>
                      <Form.Control
                        defaultValue="Andrew"
                        placeholder="Country"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Postal Code</label>
                      <Form.Control
                        placeholder="ZIP Code"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>About Me</label>
                      <Form.Control
                        cols="80"
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                        that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        as="textarea"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Update Profile
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
    
      </Row>
    </Container>
    );

  }


} 

export default EditCustomer;
