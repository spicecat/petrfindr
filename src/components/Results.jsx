import { useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import { LngLat } from 'maplibre-gl';

import { useGame } from '../contexts'

const Results = () => {
    const { createRandomLocation, showLocationMarker, location: { coords, name }, marker, remainingLocations } = useGame();
    const [dist, setDist] = useState();
    const [score, setScore] = useState(0);

    const guess = () => {
        const locationLngLat = new LngLat(coords.lng, coords.lat);
        const distance = locationLngLat.distanceTo(marker.getLngLat());
        
        const perfectScoreThreshold = 10;
        const goodScoreThreshold = 30;

        let calculatedScore;

        if (distance <= perfectScoreThreshold) {
            calculatedScore = 100;
        } else if (distance <= goodScoreThreshold) {
            calculatedScore = Math.round((1 - distance / goodScoreThreshold) * 100);
        } else {
            calculatedScore = 0;
        }

        setScore(calculatedScore);
        setDist(distance);
        showLocationMarker();
    }

    const nextLocation = () => {
        setDist(null);
        createRandomLocation();
    }

    const playAgain = async () => {
        createRandomLocation();
        setDist(null);
        setScore(0);
    }


    return (
        <Grid item xs={12} style={{ border: '1px solid black', padding: '10px' }}>
            {!dist && <Button
                onClick={guess}
                variant="contained"
                style={{ fontSize: '50px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
            >
                Guess
            </Button>}
            <br />
            {JSON.stringify(marker.getLngLat())}
            {dist &&
                <>
                    {remainingLocations.length === 0 ?
                        <Button
                            color='secondary'
                            onClick={playAgain}
                            variant="contained"
                            style={{ fontSize: '30px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
                        >
                            Play Again
                        </Button> :
                        <Button
                            onClick={nextLocation}
                            variant="contained"
                            style={{ fontSize: '30px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
                        >
                            Next Location
                        </Button>
                    }
                    <Typography variant='h3'>{name}</Typography>
                    <Typography variant='h5'>{Math.floor(dist)} Petrs away</Typography>
                    <Typography variant="h4">Score: {Math.floor(score)}</Typography>
                </>
            }
        </Grid>
    );
};

export default Results;
