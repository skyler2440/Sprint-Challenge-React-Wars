import React from "react";
import { Header, Table, Image, Button } from "semantic-ui-react";


export default function Card(props) {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4">
          <p>{props.name}</p></Header>
      </Table.Cell>
      <Table.Cell>
        <p>{props.height}</p>
      </Table.Cell>
    </Table.Row>
  );
}
