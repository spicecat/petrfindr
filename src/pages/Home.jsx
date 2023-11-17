import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import logo from '../assets/logo.png';
import backgroundImage from '../assets/student-center.jpeg';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Titan One',
            'Arial',
        ].join(','),
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                margin={0}
                height='100vh'
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                <Typography 
                    variant="h2"
                    sx={{
                        margin: '16px',
                        color: '#FFC436',
                        border: '4px solid #FFC436', // Add border style here
                        borderRadius: '10px', // Add border radius if needed
                        padding: '10px 50px', // Adjust padding as needed
                        backgroundColor: '#0174BE',
                      }}
                    > PetrGuessr </Typography>
                <img src={logo} alt="petr" style={{ height: '60vh' }} />
                <br />
                <Button
                    variant="contained"
                    style={{ color: '#FFC436',fontSize: '32px', padding: '12px 128px', fontFamily: 'Titan One', borderRadius: '10px' }}
                    component={Link}
                    to='/game'                 
                >
                Start
                </Button>
            </Grid>
        </ThemeProvider >
    );
};

export default Home;
