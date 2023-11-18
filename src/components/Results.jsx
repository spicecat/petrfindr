import { useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import { LngLat } from 'maplibre-gl';

import { useGame } from '../contexts'

const Results = () => {
    const { createRandomLocation, showLocationMarker, location: { coords, name }, marker, remainingLocations } = useGame();
    const [dist, setDist] = useState();
    const [score, setScore] = useState(null);
    const [totalScore, setTotalScore] = useState(0);

    const guess = () => {
        const locationLngLat = new LngLat(coords.lng, coords.lat);
        const distance = locationLngLat.distanceTo(marker.getLngLat());

        const calculatedScore = Math.floor(Math.max(0, 115 - 0.5 * Math.max(distance, 30)));
        setScore(calculatedScore);
        setTotalScore(totalScore + calculatedScore);
        setDist(distance);
        showLocationMarker();
    }

    const nextLocation = () => {
        setDist(null);
        setScore(null);
        createRandomLocation();
    }

    const playAgain = async () => {
        createRandomLocation();
        setDist(null);
        setScore(null);
        setTotalScore(0);
    }



    return (
        <Grid
            container
            spacing={2}
            style={{ padding: '10px' }}
        >
            <Grid item xs={12}
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Typography align="center" variant="h4" style={{ fontFamily: '"Press Start 2P"', color: '#FFC436' }}>
                    Score: {Math.floor(totalScore)} {score !== null && `(+${score})`}
                </Typography>
                <br />
                {!dist && (
                    <Button
                        color="success"
                        onClick={guess}
                        variant="contained"
                        style={{ fontSize: '50px', fontFamily: 'Titan One', borderRadius: '10px' }}
                    >
                        Guess
                    </Button>
                )}
                {dist && (
                    <>
                        <div>
                            {
                                remainingLocations.length === 0 ? (
                                    <Button
                                        color="warning"
                                        onClick={playAgain}
                                        variant="contained"
                                        style={{ fontSize: '30px', fontFamily: 'Titan One', borderRadius: '10px' }}
                                    >
                                        Play Again
                                    </Button>
                                ) : (
                                    <Button
                                        color="success"
                                        onClick={nextLocation}
                                        variant="contained"
                                        style={{ fontSize: '30px', fontFamily: 'Titan One', borderRadius: '10px' }}
                                    >
                                        Next Location
                                    </Button>
                                )
                            }
                        </div>
                        <br />
                        <br />
                        <Typography align="center" variant="h5" style={{ color: 'white', fontFamily: '"Press Start 2P"' }}>{name}</Typography>
                        <br />
                        <Typography align="center" variant="h6" style={{ color: 'white', fontFamily: '"Press Start 2P"' }}>{Math.floor(dist)} Petrs away</Typography>
                    </>
                )}
            </Grid>
        </Grid >
    );
};

export default Results;
