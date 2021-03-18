import React, { Component } from "react";
import "react-table/react-table.css";
import ReactTable from "react-table";
import axios from "axios";

class CustomersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
    };
  }

  componentDidMount() {
    let columns = [
      {
        Header: "ID",
        Id: "Id",
        accessor: "Id",
        filterable: true,
        Cell: (row) => (
          <div style={{ textAlign: "center" }}>
            <a href={"/customer/" + row.row.Id}>{row.row.Id}</a>
          </div>
        ),
      },
      {
        Header: "Όνομα",
        Id: "FirstName",
        accessor: "FirstName",
        filterable: true,
      },
      {
        Header: "Επίθετο",
        Id: "LastName",
        accessor: "LastName",
        filterable: true,
      },
      {
        Header: "Διεύθυνση",
        Id: "Address",
        accessor: "Address",
        filterable: true,
      },
      {
        Header: "Περιοχή",
        Id: "Area",
        accessor: "Area",
        filterable: true,
      },
      {
        Header: "Τηλέφωνο",
        Id: "Phone",
        accessor: "Phone",
        filterable: true,
      },
    ];
    axios.get(process.env.REACT_APP_API_URL + "Customers").then((response) => {
      if (response.data.status == 200) {
        const customers = response.data.customers;
        this.setState({ data: customers, columns: columns });
      } else {
        this.setState({ data: [], columns: columns });
      }
    });
  }

  render() {
    const { columns, data } = this.state;
    return (
      <ReactTable
        columns={columns}
        data={data}
        className="-striped -highlight"
      ></ReactTable>
    );
  }
}

export default CustomersTable;
