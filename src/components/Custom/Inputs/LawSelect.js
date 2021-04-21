import React, { Component } from "react";
import "react-table/react-table.css";
import axios from "axios";
import { Form } from "react-bootstrap";

class LawSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laws: [],
      lawId: 0,
    };
    this.handleChildChange = this.handleChildChange.bind(this);
  }

  handleChildChange(e) {
    this.props.handleFromParent(e);
    this.setState({
      lawId: e.target.value,
    });
  }
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "Laws").then((response) => {
      if (response.data.status == 200) {
        const laws = response.data.laws;
        this.setState({ laws: laws });
      } else {
        this.setState({ laws: [] });
      }
    });
  }

  render() {
    const { laws, lawId } = this.state;
    return (
      <Form.Group>
        <label>ΕΠΙΛΟΓΗ ΝΟΜΟΥ ΥΠΑΓΩΓΗΣ</label>
        <Form.Control
          custom
          id="lawId"
          as="select"
          value={lawId}
          onChange={(e) => this.handleChildChange(e)}
        >
          <option value={0} key={0} disabled>
            Επιλογή Νόμου υπαγωγής
          </option>
          {laws.map((law) => (
            <option key={law.Id} value={law.Id}>
              {law.Name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}

export default LawSelect;
