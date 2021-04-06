import React from "react";
import CustomersTable from "components/Custom/CustomersTable";

// react-bootstrap components
import { Row, Col, Card, Container } from "react-bootstrap";

function Customers() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Πίνακας Πελατών <a href='/addCustomer'><i className="nc-icon nc-simple-add"></i></a></Card.Title>
                <p className="card-category">
                  Προβάλονται τα βασικά στοιχεία των πελατών του γραφείου.
                  <b>Επιπλέον στοιχεία εντός της καρτέλας παλάτη.</b>
                </p>
              </Card.Header>
              <Card.Body>
                <CustomersTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Customers;
