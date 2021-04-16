import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {
  Button,
  Card,
  Form,
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
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleUpdate(e) {
    e.preventDefault()
    if (this.state.firstName === '' || this.state.lastName === '')
      return;
    let customer = {
      customerID: this.state.customerID,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      mobile: this.state.mobile,
      address: this.state.address,
      area: this.state.area,
      zipcode: this.state.zipcode,
      vatnumber: this.state.vatnumber,
      notifysms: this.state.notifysms,
      notifyemail: this.state.notifyemail,
      email: this.state.email,
      taxoffice: this.state.taxoffice,
      notes: this.state.notes
    }         
    axios.put(process.env.REACT_APP_API_URL + `Customers`, customer, {
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
            title: 'Επιτυχής επεξεργασία πελάτη!',            
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
              mobile: customer.Mobile,
              phone: customer.Phone,
              address: customer.Address,
              area: customer.Area,
              email: customer.Email,
              notes: customer.Notes,
              notifyemail: customer.SendEmail,
              notifysms: customer.SendSms,
              taxoffice: customer.TaxOffice,
              vatnumber: customer.Vat,
              zipcode: customer.Zipcode
            }
          )
        }
        
    }).catch((error) => {
        console.log(error)
    })
  }
  render() {
    const {lastName, firstName, mobile, phone, address, area, email, notes, notifyemail, notifysms, taxoffice, vatnumber, zipcode} = this.state
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
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΟΝΟΜΑ</label>
                      <Form.Control
                        id={"firstName"}
                        placeholder="Όνομα"
                        value={firstName}
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
                        value={lastName}
                        type="text"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΚΙΝΗΤΟ</label>
                      <Form.Control
                        id={"mobile"}
                        placeholder="Κινητό τηλέφωνο"
                        value={mobile}
                        type="number"
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-3 pl-3" md="3">
                    <Form.Group>
                      <label>ΣΤΑΘΕΡΟ</label>
                      <Form.Control
                        id={"phone"}
                        placeholder="Σταθερό τηλέφωνο"
                        value={phone}
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
                        value={address}
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
                        value={area}
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
                        value={zipcode}
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
                        value={vatnumber}
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
                        value={taxoffice}
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
                        value={email}
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
                        value={notifyemail}
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
                        value={notifysms}
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
                        value={notes}
                        rows={3}
                        onChange={this.handleInputChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill"
                  type="btn"
                  variant="warning"
                  style={{width: "100%"}}
                  onClick={this.handleUpdate}
                >
                  ΑΠΟΘΗΚΕΥΣΗ ΠΕΛΑΤΗ
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
