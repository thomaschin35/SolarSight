import React, { useState, Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import GoogleMap from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({lat, long}) => {
  const [longtitude, setLong] = useState(long);
  const [latitude, setLat] = useState(lat);
  
  
  const containerStyle = {
    width: '700px',
    height: '700px'
  };
  
  const center = {
    lat: latitude,
    lng: longtitude
  }
  
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  class MapDisplay extends Component {
    render() {
      return (  
        <div>
          <LoadScript
            googleMapsApiKey="AIzaSyAI5Vt9NZ2SSocR9fues0XtewoOCGjADbo"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={7}
            >
              {/* <LocationPin
            lat={latitute}
            lng={longtitude}
            text={address}
          /> */}
              
            </GoogleMap>
          </LoadScript>
  
        </div>
      )
    }
  }
  return (
    <MapDisplay></MapDisplay>
  );
};
export default Map;

// const Map = ({ zoomLevel }) => (
//   <div className="map">
//     <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//     <div className="google-map" style={{height: '100vh', width: '100%'}}>
//       <GoogleMap
//         bootstrapURLKeys={{ key: 'AIzaSyBrZo0Z2Km_zpYmrNUeBig2GLtHjKfxJDk' }}
//         defaultCenter={center}
//         defaultZoom={zoomLevel}
//       >
//         <LocationPin
//           lat={center.lat}
//           lng={center.lng}
//           text={center.address}
//         />
//       </GoogleMap>
//     </div>
//   </div>
// )

