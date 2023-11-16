import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';



export default function Layout() {
    
    return (
        <>
            <Helmet>
                <title>PetrGuessr</title>
            </Helmet>
            <main>
                <Box sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Outlet />
                </Box>
            </main>
        </>
    );
}