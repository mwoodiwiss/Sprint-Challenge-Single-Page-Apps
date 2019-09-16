import React, { useEffect, useState } from "react";
import axios from "axios";
import { CharacterCard } from "./CharacterCard";
import { CardGroup } from "semantic-ui-react";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="character-list">
      <CardGroup centered>
      {character.map((item, index) => {
        return (
          <CharacterCard
            key={index}
            image={item.image}
            name={item.name}
            gender={item.gender}
            species={item.species}
            status={item.status}
          />
        );
      })}
      </CardGroup>
    </div>
  );
}
