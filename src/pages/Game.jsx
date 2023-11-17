import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import { Location, Minimap, Results } from '../components';
import { Marker } from 'maplibre-gl';
import locations from '../config/locations.json';

const Game = () => {
  const [marker, setMarker] = useState();
  const [location, setLocation] = useState();

  const randomLocation = () => {
    const locationKeys = Object.keys(locations);
    return locations[locationKeys[Math.floor(Math.random() * locationKeys.length)]];
  }

  useEffect(() => {
    setLocation(randomLocation());
    setMarker(new Marker({ draggable: true }))
  }, []);

  return (
    <>
      <Grid item xs={6}>
        {location && <Location location={location} />}
        {location && marker && <Results location={location} marker={marker} />}
      </Grid>
      <Grid item xs={6} style={{ height: "100%" }}>
        {marker && <Minimap marker={marker} />}
      </Grid>
    </>
  );
};

export default Game;
