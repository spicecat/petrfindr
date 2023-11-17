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
      <Grid item xs={6} style={{ height: "100%", padding: '40px' }}>
        {location && <Location />}
        <br/>
        <br/>
        <br/>
        {location && marker && <Results />}
      </Grid>
      <Grid item xs={6} style={{ height: '100vh', border: '8px solid #FFC436', borderRadius: '10px' }}>
        <Minimap />
      </Grid>
    </>
  );
};

export default Game;
