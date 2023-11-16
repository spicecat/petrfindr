import React, { useState } from 'react';
import { Button } from '@mui/material';


const RandomImage = () => {
    const [image, setImage] = useState('');

    const handleButtonClick = () => {
        const images = require.context('../assets/locations', true, /\.jpe?g$/);
        const randomImage = images.keys()[Math.floor(Math.random() * images.keys().length)];
        setImage(images(randomImage));
        console.log(images(randomImage))
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>
                Display Random Image
            </Button>
            {image && <img src={image} alt="Random Image" />}
        </div>
    );
};

export default RandomImage;
