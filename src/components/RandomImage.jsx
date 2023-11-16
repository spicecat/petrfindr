import { useState } from 'react';
import { Button, Paper } from '@mui/material';


const RandomImage = () => {
    const [image, setImage] = useState('');

    const handleButtonClick = () => {
        const images = require.context('../assets/locations', true, /\.jpe?g$/);
        const randomImage = images.keys()[Math.floor(Math.random() * images.keys().length)];
        setImage(images(randomImage));
        console.log(images(randomImage))
    };

    return (
        <Paper elevation={3}>
            <Button onClick={handleButtonClick}>
                Display Random Image
            </Button>
            <br />
            {image && <img src={image} alt="Random" style={{ height: '400px' }} />}
        </Paper>
    );
};

export default RandomImage;
