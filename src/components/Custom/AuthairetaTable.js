import React, { Component } from "react";
import "react-table/react-table.css";
import ReactTable from "react-table";
import axios from "axios";

class AuthairetaTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
    };
  }

  renderStatusText(status) {
    if (status == 0) {
      return <p style={{ color: "#8B0000", fontWeight: "bold" }}>ΠΕΡΑΙΩΜΕΝΟ</p>;
    }
    return <p style={{ color: "#006400", fontWeight: "bold" }}>ΕΝΕΡΓΟ</p>;
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
            <a href={"/authereto/" + row.row.Id}>{row.row.Id}</a>
          </div>
        ),
      },
      {
        Header: "A/A Δήλωσης",
        Id: "Number",
        accessor: "Number",
        filterable: true,
      },
      {
        Header: "Πελάτης",
        Id: "CustomerName",
        accessor: "customer_fullname",
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
        Header: "Κατάσταση",
        Id: "Status",
        accessor: "Status",
        filterable: true,
        Cell: (row) => (
          <div className="actions-right">
            {this.renderStatusText(row.row.Status)}
          </div>
        ),
      },
      {
        Header: "Ημερομηνία Έναρξης",
        Id: "DateCreated",
        accessor: "DateCreated",
        filterable: true,
      },
    ];
    axios.get(process.env.REACT_APP_API_URL + "Authaireta").then((response) => {
      if (response.data.status == 200) {
        const authaireta = response.data.authaireta;
        this.setState({ data: authaireta, columns: columns });
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

export default AuthairetaTable;
