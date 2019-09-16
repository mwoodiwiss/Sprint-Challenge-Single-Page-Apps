import React from "react";
import { Card } from "semantic-ui-react";

export function LocationCard(props) {
  return (
    <Card className="location-card">
      <h1>{props.name}</h1>
      <p>{"Type: " + props.type}</p>
      <p>{"Dimension: " + props.dimension}</p>
    </Card>
  );
}
