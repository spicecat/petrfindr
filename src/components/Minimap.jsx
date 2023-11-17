import { useRef, useEffect, useState } from 'react';
import { Button } from "@mui/material";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import './map.css';
import api from '../config/api';

export default function Map({ marker }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-117.8436495);
    const [lat] = useState(33.6445005);
    const [zoom] = useState(14);
    const [API_KEY] = useState(api.maptilerApiKey);

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            terrainControl: true,
            scaleControl: true,
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

        // const el = document.createElement('div');
        // el.className = 'marker';
        // // el.style.background = 'yellow';
        // el.style.backgroundImage = 'https://placekitten.com/g/50/50';
        // el.style.width = '50px';
        // el.style.height = '50px'

        marker.setLngLat([lng, lat]).addTo(map.current);
    }, [API_KEY, lng, lat, zoom]);

    const toHome = () => {
        map.current.flyTo({
            center: [lng, lat],
            zoom: zoom
        });
    };

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
            <Button onClick={toHome}>
                Home
            </Button>
        </div>
    );
}