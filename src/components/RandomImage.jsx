import { useState, useEffect } from 'react';
import { Button, Grid, Paper } from '@mui/material';


const RandomImage = () => {
    const [image, setImage] = useState('');


    const pickImage = () => {
        const images = require.context('../assets/locations', true, /\.jpe?g$/);
        const randomImage = images.keys()[Math.floor(Math.random() * images.keys().length)];
        setImage(images(randomImage));
    };

    useEffect(pickImage, []);

    return (
        <Grid
            item
            xs={12}
            style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${image})`,
                height: '100%'
            }}
        />
    );
};

export default RandomImage;
