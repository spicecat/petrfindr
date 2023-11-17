import { useEffect } from 'react';
import { Grid } from "@mui/material";

import { useGame } from '../contexts'
import { Location, Minimap, Results } from '../components';

const Game = () => {
  const { createRandomLocation, location, marker } = useGame();

  useEffect(() => {
    createRandomLocation();
  }, []);

  return (
    <>
      <Grid item xs={6} style={{}}>
        {location && <Location />}
        {location && marker && <Results />}
      </Grid>
      <Grid item xs={6} style={{ height: "100%" }}>
        <Minimap />
      </Grid>
    </>
  );
};

export default Game;
