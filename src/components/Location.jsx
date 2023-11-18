import { Grid } from '@mui/material';

import { useGame } from '../contexts'

const Location = () => {
    const { location: { name, src } } = useGame();

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
        >
            <img  alt={`Petr at ${name}`} title={name} height='0px' src="http://www.bombadillokittens.com/sites/default/files/2018-10/IMG_4975%20(1).JPG"/>
        </Grid>
    );
};

export default Location;
