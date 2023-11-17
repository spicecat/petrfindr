import { useRef, useEffect, useState } from 'react';
import { Button, Link, Grid } from "@mui/material";
import { RandomImage, Minimap, Results } from '../components';
import { Marker } from 'maplibre-gl';


const Game = () => {
  const [marker, setMarker] = useState();



  useEffect(() => {
    setMarker(new Marker({ draggable: true }))
  }, []);

  return (
    <>
      <Grid container xs={6}>
        <RandomImage />
        <Results />
      </Grid>
      <Grid item xs={6} style={{ height: "100%" }}>
        {marker && <Minimap marker={marker} />}
      </Grid>
    </>
  );
};

export default Game;
