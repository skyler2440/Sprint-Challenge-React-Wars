import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";
import Card from "./Card";

export default function Grid({ limit }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      const people = res.data.results;
      console.log("swapi api:", people);
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
            <Table.HeaderCell>Birth Year</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Height</Table.HeaderCell>
            <Table.HeaderCell>Weight</Table.HeaderCell>
            <Table.HeaderCell>Hair Color</Table.HeaderCell>
            <Table.HeaderCell>Eye Color</Table.HeaderCell>

            <Table.HeaderCell>Skin Color</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {people.map(name => {
            return (
              <Card
                key={name.name}
                name={name.name}
                birthYear={name.birth_year}
                eyeColor={name.eye_color}
                skinColor={name.skin_color}
                gender={name.gender}
                height={name.height}
                weight={name.mass}
                hairColor={name.hair_color}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
