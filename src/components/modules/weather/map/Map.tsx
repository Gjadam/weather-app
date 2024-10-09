'use client'

// leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Types
interface MapProps {
    position: [number, number]; // مختصات: یک آرایه شامل latitude و longitude  
}

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


// تعریف کامپوننت Map  
const Map = ({ position }: MapProps) => {

    return (
        position[0] !== 0 ? (
            <div className=" self-end brightness-75 rounded overflow-hidden  w-full h-full">
                <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            {position[0]}, {position[1]}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        ) : (
            <div className=" self-end w-full h-full bg-placeholder rounded animate-pulse"></div>
        )
    );
};

export default Map;  