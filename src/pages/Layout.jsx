import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';



export default function Layout() {

    return (
        <>
            <Helmet>
                <title>PetrGuessr</title>
            </Helmet>
            <main>
                <Grid container margin={2} height='400px'>
                    <Outlet />
                </Grid>
            </main>
        </>
    );
}