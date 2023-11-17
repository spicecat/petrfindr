import { Grid } from '@mui/material';

import {useGame} from '../contexts'

const Location = () => {
    const { location:{src} } = useGame();

    return (
        <Grid
            item
            xs={12}
            style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${require(`/src/assets/locations/${src}`)})`,
                height: '100%'
            }}
        />
    );
};

export default Location;
