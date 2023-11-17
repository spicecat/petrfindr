import { Grid } from '@mui/material';

const Location = ({ location: { src } }) => {
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
