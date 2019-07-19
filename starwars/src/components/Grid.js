
import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import axios from "axios";
import PetCard from "./Card";

export default function Grid({ limit }) {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("corgi");

  useEffect(() => {
    axios
      .get(`https://swapi.co/people`)
      .then(response => {
        const doggos = response.data.message;
        // console.log("dogs api:", doggos);
        // KEY PART, SAVE TO STATE:
        setPets(doggos);
      });
  }, [breed]);

  console.log("breed", breed);
  return (
    <div className="pet-grid">
      
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Adopt Me</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {pets.map(petUrl => {
            return <PetCard key={petUrl} breed={breed} imgUrl={petUrl} />;
          })}
        </Table.Body>
      </Table>

    </div>
  );
}