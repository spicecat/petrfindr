import { Button, Link, Grid, Typography } from "@mui/material";

const Results = ({}) => {
    return (
        <Grid item xs={12}>
            <Button
                variant="contained"
                style={{ fontSize: '70px', padding: '10px 20px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
            >
                <Link to='/game' style={{ color: 'yellow', textDecoration: 'None' }}>
                    Guess
                </Link>
            </Button>
            <br />
            <Typography variant='h2'>Results</Typography>
        </Grid>
    );
};

export default Results;
