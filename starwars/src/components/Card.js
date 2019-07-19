import React from "react";
import { Header, Table, Image, Button } from "semantic-ui-react";


export default function Card({ imgUrl, breed }) {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4" image>
          <Image src={imgUrl} rounded size="mini" />
          <Header.Content>{breed}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Button>Adopt Me</Button>
      </Table.Cell>
    </Table.Row>
  );
}
