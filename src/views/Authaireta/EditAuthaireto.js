import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CustomersSelect from "components/Custom/Inputs/CustomersSelect.js";
import LawSelect from "components/Custom/Inputs/LawSelect.js";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class EditAuthaireto extends Component {
  constructor(props) {
    super(props);
    this.state = {
        customerId: 0,
          lawId: 0,
          address: "",
          area: "",
          notes: "",
          number: "",
          status: "",
      };

    this.handleSave = this.handleSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSave(e) {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.customerId === 0 ||
      this.state.lawId === 0 ||
      this.state.number === ""
    )
      return;
    let authaireto = {
      customerId: this.state.customerId,
      lawId: this.state.lawId,
      number: this.state.number,
      address: this.state.address,
      area: this.state.area,
      zipcode: this.state.zipcode,
      notes: this.state.notes,
      title: this.state.title,
    };

    axios
      .get(process.env.REACT_APP_API_URL + `Authaireta/`, authaireto, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
      .then((response) => {
        if (response.data.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Επιτυχής καταχώρηση αυθαιρετου!",
          }).then(() => {
            window.location.replace("/authereta");
          });
        } else {
          console.log(response.data.message);
          Swal.fire({
            icon: "error",
            title: "Αποτυχία!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

   
  componentDidMount() {

    let authairetoId = window.location.pathname.split("/").pop()
    axios.get(process.env.REACT_APP_API_URL + `Authaireta/${authairetoId}`)
      .then((response) => {      
        console.log(response.data)
        if (response.data.status == 200)
        {
           let authaireto = response.data.authaireto[0]
          this.setState(
            {
              customerId: authaireto.CustomerId,
              lawId: authaireto.LawId,
              address: authaireto.Address,
              area: authaireto.Area,
              notes: authaireto.Notes,
              number: authaireto.Number,
              status: authaireto.Status,

            }
          )
        }
        
    }).catch((error) => {
        console.log(error)
    })
  }
  render() {
      const {customerId, lawId, address, area, notes, number, status} = this.state
    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Επεξεργασία στοιχείων αυθαιρέτου</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-3 pl-3" md="4">
                      <CustomersSelect
                        Id="customerId"
                        handleFromParent={this.handleInputChange}
                      />
                    </Col>
                    <Col className="pr-3 pl-3" md="4">
                      <LawSelect
                        Id="lawId"
                        handleFromParent={this.handleInputChange}
                      />
                    </Col>
                    <Col className="pr-3 pl-3" md="4">
                      <Form.Group>
                        <label>Α/Α ΔΗΛΩΣΗΣ</label>
                        <Form.Control
                          id={"number"}
                          placeholder="Α/Α Δήλωσης"
                          type="number"
                          value={number}
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
                          placeholder="Τ.Κ."
                          type="number"
                          onChange={this.handleInputChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-3 pl-3" md="12">
                      <Form.Group>
                        <label>ΤΙΤΛΟΣ ΙΔΙΟΚΤΗΣΙΑΣ</label>
                        <Form.Control
                          id={"title"}
                          placeholder="Τίτλος ιδιοκτησίας"
                          as="textarea"
                          rows={1}
                          onChange={this.handleInputChange}
                        ></Form.Control>
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
                    style={{ width: "100%" }}
                    onClick={this.handleSave}
                  >
                    ΔΗΜΙΟΥΡΓΙΑ ΑΥΘΑΙΡΕΤΟΥ
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

export default EditAuthaireto;
