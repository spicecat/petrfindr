import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Map, Marker, NavigationControl } from 'maplibre-gl';

import logo from '../assets/logo.png';
import locations from '../config/locations.json';
import api from '../config/api';

const lng = -117.8436495;
const lat = 33.6445005;
const zoom = 14;
const API_KEY = api.maptilerApiKey;

const el = document.createElement('img');
el.className = 'marker';
el.src = logo;
el.style.height = '50px';
el.style.width = '50px';

const GameContext = createContext();

export default function GameProvider({ children }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [marker] = useState(new Marker({ draggable: true }));
    const [locationMarker] = useState(new Marker({ element: el }));
    const [location, setLocation] = useState();
    const [remainingLocations, setRemainingLocations] = useState(Object.keys(locations));

    const createMap = () => {
        map.current = new Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            terrainControl: true,
            scaleControl: true,
            zoom: zoom
        });
        map.current.addControl(new NavigationControl(), 'top-right');
    }

    const toHome = () => {
        map.current.flyTo({
            center: [lng, lat],
            zoom: zoom
        });
    };

    const createRandomLocation = () => {
        toHome();

        const remainingLocationsCopy = remainingLocations.length === 0 ? Object.keys(locations) : remainingLocations;

        const randLocationKey = remainingLocationsCopy[Math.floor(Math.random() * remainingLocationsCopy.length)];
        const randLocation = locations[randLocationKey];

        setRemainingLocations(remainingLocationsCopy.filter(loc => loc !== randLocationKey));

        locationMarker.setLngLat([randLocation.coords.lng, randLocation.coords.lat]);
        locationMarker.remove();
        marker.setLngLat([lng, lat]).addTo(map.current);

        setLocation(randLocation);
    }

    const showLocationMarker = () => {
        locationMarker.addTo(map.current);
        map.current.flyTo({
            center: [location.coords.lng, location.coords.lat],
        });
    }

    useEffect(() => {
    }, []);

    return (
        <GameContext.Provider
            value={{
                createMap,
                createRandomLocation,
                showLocationMarker,
                toHome,
                mapContainer,
                locationMarker,
                location,
                map,
                marker,
                remainingLocations
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => useContext(GameContext);