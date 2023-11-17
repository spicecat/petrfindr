import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

import api from '../config/api';


function Minimap() {
    const position = { lat: 53.54992, lng: 10.00678 };

    return (
        <APIProvider apiKey={api.googleMapsApiKey}>
            <Map
                center={position}
                zoom={10}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                {/* <Marker position={position} /> */}
            </Map>
        </APIProvider>
    );
}

export default Minimap;
