import { useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import { LngLat } from 'maplibre-gl';

const Results = ({ location: { coords, name }, marker }) => {
    const [dist, setDist] = useState();

    const calcDist = () => {
        const locationLngLat = new LngLat(coords.lng, coords.lat);
        setDist(locationLngLat.distanceTo(marker.getLngLat()));
    }

    return (
        <Grid item xs={12}>
            <Button
                onClick={calcDist}
                variant="contained"
                style={{ fontSize: '70px', padding: '10px 20px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
            >
                Guess
            </Button>
            <br />
            <Typography variant='h2'>Results</Typography>
            {dist && <Typography >{Math.floor(dist)} Petrs away</Typography>}
            {name}
        </Grid>
    );
};

export default Results;
