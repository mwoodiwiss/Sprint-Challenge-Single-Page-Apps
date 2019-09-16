import React from "react";
import { Card } from "semantic-ui-react";

export function EpisodeCard(props) {
  return (
    <Card className="episode-card">
      <h1>{props.name}</h1>
      <p>{"Episode: " + props.episode}</p>
      <p>{"Air Date: " + props.air_date}</p>
    </Card>
  );
}
