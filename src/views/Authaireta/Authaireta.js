import React from "react";
import AuthairetaTable from "components/Custom/AuthairetaTable";

// react-bootstrap components
import { Row, Col, Card, Container } from "react-bootstrap";

function Authaireta() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Πίνακας Αυθαιρέτων <a href='/addAuthaireto'><i className="nc-icon nc-simple-add"></i></a></Card.Title>
                <p className="card-category">
                  Λίστα αυθαιρέτων N.4495/2017.
                </p>
              </Card.Header>
              <Card.Body>
                <AuthairetaTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Authaireta;
