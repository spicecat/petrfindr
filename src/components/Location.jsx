import { Grid } from '@mui/material';

import { useGame } from '../contexts'

const Location = () => {
    const { location: { src } } = useGame();

    return (
        <Grid
            item
            xs={12}
            style={{
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundImage: `url(${require(`/src/assets/locations/${src}`)})`,
                height: '100%',
                backgroundColor: 'black',
                border: '4px solid #FFC436',
                borderRadius: '10px'
            }}
        />
    );
};

export default Location;
