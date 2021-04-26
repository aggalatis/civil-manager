import React, { Component } from "react";
import "react-table/react-table.css";
import axios from "axios";
import { Form } from "react-bootstrap";

class CustomersSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      customerId: 0,
    };
    this.handleChildChange = this.handleChildChange.bind(this);
  }

  handleChildChange(e) {
    this.props.handleFromParent(e);
    this.setState({
      customerId: e.target.value,
    });
  }
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "Customers").then((response) => {
      if (response.data.status == 200) {
        const customers = response.data.customers;
        this.setState({ customers: customers });
      } else {
        this.setState({ customers: [] });
      }
    });
  }

  render() {
    const { customers, customerId } = this.state;
    return (
      <Form.Group>
        <label>ΕΠΙΛΟΓΗ ΠΕΛΑΤΗ</label>
        <Form.Control
          custom
          id="customerId"
          as="select"
          value={customerId}
          onChange={(e) => this.handleChildChange(e)}
        >
          <option value={0} key={0} disabled>
            Επιλέξτε πελάτη
          </option>
          {customers.map((customer) => (
            <option key={customer.Id} value={customer.Id}>
              {customer.FirstName} {customer.LastName}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}

export default CustomersSelect;