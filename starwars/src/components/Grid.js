
import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import axios from "axios";
import Card from "./Card";

export default function Grid({ limit }) {
  // https://dog.ceo/api/breed/hound/images/random/15
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
            <Table.HeaderCell>Adopt Me</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {people.map(name => {
            return <Card key={name}  imgUrl={name} />;
          })}
        </Table.Body>
      </Table>

    </div>
  );
}