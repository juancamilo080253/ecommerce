import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../empleados/empleados.css";
import DataGrid from "../../grid/grid";
import { request } from "../../helper/helper";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "apellido_p",
    text: "Primer Apellido",
  },
  {
    dataField: "apellido_m",
    text: "Segundo apellido",
  },
  {
    dataField: "telefono",
    text: "Telefono",
  },
  {
    dataField: "mail",
    text: "Correo electronico",
  },
  {
    dataField: "direccion",
    text: "Direccion",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar empleados</h1>
        </Row>
        <Row>
          <DataGrid url="/empleados" columns={columns} />
        </Row>
      </Container>
    );
  }
}
