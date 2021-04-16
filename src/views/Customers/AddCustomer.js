import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
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


class AddCustomer extends Component{
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  
  handleSave(e) {
    e.preventDefault()
    if (this.state.firstName === '' || this.state.lastName === '')
      return;
    let customer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      telephone: this.state.telephone,
      address: this.state.address,
      number: this.state.number,
      area: this.state.area,
      zipcode: this.state.zipcode,
      vatnumber: this.state.vatnumber,
      notifysms: this.state.notifysms,
      notifyemail: this.state.notifyemail,
      email: this.state.email,
      taxoffice: this.state.taxoffice,
      notes: this.state.notes
    }         
    
    axios.post(process.env.REACT_APP_API_URL + `Customers`, customer, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
      .then((response) => {      
        if (response.data.status == 200) {

          Swal.fire({
            icon: 'success',
            title: 'Επιτυχής καταχώρηση πελάτη!',            
          }).then(() => {
            window.location.replace("/customers")
          })
          
        } else {
          console.log(response.data.message)
          Swal.fire({
            icon: 'error',
            title: 'Αποτυχία!',
          })
        }       
        
    }).catch((error) => {
        console.log(error)
    })
    
    
  }
  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount()
  {
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      telephone: '',
      address: '',
      number: '',
      area: '',
      zipcode: '',
      vatnumber: '',
      notifysms: '0',
      notifyemail: '0',
      email: '',
      taxoffice: '',
      notes: ''
    })
  }
  render() {
    
    return (
      <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Συμπλήρωση στοιχείων πελάτη</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΟΝΟΜΑ</label>
                      <Form.Control
                        id={"firstName"}
                        placeholder="Όνομα"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΕΠΩΝΥΜΟ</label>
                      <Form.Control
                        id={"lastName"}
                        placeholder="Επώνυμο"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΚΙΝΗΤΟ</label>
                      <Form.Control
                        id={"phone"}
                        placeholder="Κινητό τηλέφωνο"
                        type="number"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΣΤΑΘΕΡΟ</label>
                      <Form.Control
                        id={"telephone"}
                        placeholder="Σταθερό τηλέφωνο"
                        type="number"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-3 pl-3" md="6">
                    <Form.Group>
                      <label>ΔΙΕΥΘΥΝΣΗ</label>
                      <Form.Control
                      id={"address"}                        
                        placeholder="Διεύθυνση"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                
                  <Col className="pr-3 pl-3" md="4">
                    <Form.Group>
                      <label>ΠΕΡΙΟΧΗ</label>
                      <Form.Control
                      id={"area"}
                        placeholder="Περιοχή"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="2">
                    <Form.Group>
                      <label>Τ.Κ.</label>
                      <Form.Control
                      id={"zipcode"}
                        placeholder="Ταχυδρομικός Κώδικας"
                        type="number"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-3 pl-3" md="4">
                    <Form.Group>
                      <label>ΑΦΜ</label>
                      <Form.Control
                      id={"vatnumber"}
                        placeholder="ΑΦΜ"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="4">
                    <Form.Group>
                      <label>ΔΟΥ</label>
                      <Form.Control
                      id={"taxoffice"}
                        placeholder="ΔΟΥ"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="4">
                    <Form.Group>
                      <label>E-mail</label>
                      <Form.Control
                      id={"email"}
                        placeholder="Ε-mail"
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  
                </Row>     
                <Row>
                <Col className="pr-3 pl-3" md="4">
                  <Form.Group>
                      <label>ΕΝΗΜΕΡΩΣΗ ΜΕΣΩ E-MAIL</label>
                      <Form.Control
                        custom
                        id={"notifyemail"}
                        as="select"
                        defaultValue={0}
                        onChange={this.handleInputChange}
                      >
                        <option value="0">ΟΧΙ</option>
                        <option value="1">NAI</option>

                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="4">
                  <Form.Group>
                      <label>ΕΝΗΜΕΡΩΣΗ ΜΕΣΩ SMS</label>
                      <Form.Control
                        custom
                        id={"notifysms"}
                        as="select"
                        defaultValue={0}
                        onChange={this.handleInputChange}
                      >
                        <option value="0">ΟΧΙ</option>
                        <option value="1">NAI</option>

                      </Form.Control>
                    </Form.Group>
                  </Col>         
                </Row>         
                <Row>
                  
                  <Col className="pr-3 pl-3" md="12">
                    <Form.Group>
                      <label>ΣΗΜΕΙΩΣΕΙΣ</label>
                      <Form.Control
                      id={"notes"}
                        placeholder="Σημειώσεις"
                        as="textarea"
                        rows={3}
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill"
                  type="btn"
                  variant="success"
                  style={{width: "100%"}}
                  onClick={this.handleSave}
                >
                  ΔΗΜΙΟΥΡΓΙΑ ΠΕΛΑΤΗ
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

export default AddCustomer;
