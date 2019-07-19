
import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import axios from "axios";
import Card from "./Card";

export default function Grid({ limit }) {
  
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        const people = res.data.results;
        console.log("swapi api:", people)
        // KEY PART, SAVE TO STATE:
        setPeople(people);
      });
  }, []);

//   console.log("breed", breed);
  return (
    <div className="grid">
      
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Height</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {people.map(name => {
            return <Card key={name}  name={name.name} height={name.height} />;
          })}
        </Table.Body>
      </Table>

    </div>
  );
}