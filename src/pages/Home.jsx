import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import logo from '../assets/logo.png';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Indie Flower',
            'cursive',
        ].join(','),
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1"> PetrGuessr </Typography>
            <div> Explore UCI </div>
            <div>
                <img src={logo} alt="petr" style={{ height: '400px' }} />
            </div>
            <Button
                variant="contained"
                style={{ fontSize: '70px', padding: '10px 20px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
            >
                <Link to='/game' style={{ color: 'yellow', textDecoration: 'None' }}>
                    Start
                </Link>
            </Button>
        </ThemeProvider >
    );
};

export default Home;
