import React, { useState, Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api'
import { Typography } from '@mui/material';
// import GoogleMap from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Box } from '@mui/system';

const Map = ({ lat, long }) => {
  const [longtitude, setLong] = useState(long);
  const [latitude, setLat] = useState(lat);
  const [currentPosition, setCurrentPosition] = useState({
    lat: lat,
    lng: long
  });

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    setLat(lat);
    const lng = e.latLng.lng();
    setLong(lng);
    setCurrentPosition({ lat, lng });
  };


  const containerStyle = {
    width: '550px',
    height: '550px'
  };

  const center = {
    lat: lat,
    lng: long
  }

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
              <MarkerF
                position={currentPosition}
                onDragEnd={(e) => onMarkerDragEnd(e)}
                draggable={true} /> :
              null
            </GoogleMap>
          </LoadScript>
          <br></br>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography variant="h6" textAlign={center}> Latitude: {(Math.round(latitude * 10000) / 10000.0)} Longtitude: {(Math.round(longtitude * 10000)) / 10000.0} </Typography>

          </Box>
        </div >
      )
    }
  }
  return (
    <MapDisplay></MapDisplay>
  );
};
export default Map;

