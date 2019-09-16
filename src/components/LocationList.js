import React, { useEffect, useState } from "react";
import axios from "axios";
import { LocationCard } from "./LocationCard";
import { CardGroup } from "semantic-ui-react";

export default function LocationList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocation(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="location-list">
      <CardGroup centered>
        {location.map((item, index) => {
          return (
            <LocationCard
              key={index}
              name={item.name}
              type={item.type}
              dimension={item.dimension}
            />
          );
        })}
      </CardGroup>
    </div>
  );
}
