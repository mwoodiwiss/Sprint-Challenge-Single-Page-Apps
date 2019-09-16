import React from "react";
import { Card } from "semantic-ui-react";

export function CharacterCard(props) {
  return (
    <Card className="character-card">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{"Gender: " + props.gender}</p>
      <p>{"Species: " + props.species}</p>
      <p>{"Status: " + props.status}</p>
    </Card>
  );
}
