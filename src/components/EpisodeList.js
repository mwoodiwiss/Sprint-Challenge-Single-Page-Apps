import React, { useEffect, useState } from "react";
import axios from "axios";
import { EpisodeCard } from "./EpisodeCard";
import { CardGroup } from "semantic-ui-react";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisode(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="episode-list">
       <CardGroup centered>
      {episode.map((item, index) => {
        return (
          <EpisodeCard
            key={index}
            name={item.name}
            episode={item.episode}
            air_date={item.air_date}
          />
        );
      })}
      </CardGroup>
    </div>
  );
}
