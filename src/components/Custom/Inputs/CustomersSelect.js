import React, { Component } from "react";
import "react-table/react-table.css";
import axios from "axios";
import {Form} from "react-bootstrap";

class CustomersSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
    
  }

  componentWillMount() {
    console.log("Will Mount...")
  }

  render() {
    console.log("I am rendering...")
    return (
        <Form.Group>
        <label>ΕΠΙΛΟΓΗ ΠΕΛΑΤΗ</label>
        <Form.Control
          custom
          id={"customerID"}
          as="select"
          defaultValue={0}
          onChange={this.handleInputChange}
        >
        {
            console.log("rendering...!")
        }
         

        </Form.Control>
      </Form.Group>
    );
  }
}

export default CustomersSelect;