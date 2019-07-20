import React from "react";
import { Header, Table } from "semantic-ui-react";

export default function Card(props) {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4">
          <p>{props.name}</p>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <p>{props.birthYear}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.gender}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.height} cm</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.weight} kg</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.hairColor}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.eyeColor}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{props.skinColor}</p>
      </Table.Cell>
    </Table.Row>
  );
}
