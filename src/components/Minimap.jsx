import { useEffect } from 'react';
import { useGame } from '../contexts'

import { Button } from "@mui/material";
import 'maplibre-gl/dist/maplibre-gl.css';

import './map.css';

const Minimap = () => {
    const { createMap, toHome, mapContainer } = useGame();

    useEffect(() => {
        createMap();
    }, []);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
            <Button onClick={toHome}>
                🏠Home
            </Button>
        </div>
    );
}

export default Minimap;