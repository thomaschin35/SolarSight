import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography, TextField } from '@mui/material';
import { Card } from '@mui/material';
import Map from './Components/Map';



function HomePage() {
    // Prevent page reload, clear input, set URL and push history on submit

    const [longtitude, setLong] = useState(82);
    const [latitude, setLat] = useState(32);
    const [tempLong, tempSetLong] = useState(50);
    const [tempLat, tempSetLat] = useState(32);
    

    const handleLong = (e) => {
        setLong(e.target.value);
    }
    const handleLat = (e) => {
        setLat(e.target.value);
    }
    return (
        <div>
            
            <Typography variant="h1" align="center" padding={1}>
                Solar Sight
            </Typography>
            <Typography variant="h6" align="center" padding={1}>
                Find the most optimal location to place Solar Panels in The United States
            </Typography>
            <Card sx={{ padding: 5, display: 'flex', margin: 'auto', justifyContent: 'center', backgroundColor: '#C2D3CD' }}>
                <Stack spacing={1} sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack spacing={3} direction="row" >
                        <Typography variant="h5" margin={1}>
                            Enter in a Longtitude and Latitude:
                        </Typography>
                        <TextField id="longField" label="Longtitude" variant="outlined" onChange={handleLong} />
                        <TextField id="latField" label="Latitude" variant="outlined" onChange={handleLat}/>
                        <Button
                            variant="contained"
                            onClick={() => {
                                console.log(longtitude);
                                console.log(latitude);
                                // tempSetLong(longtitude);
                                // tempSetLat(latitude);
                            }}
                        >
                            Click me
                        </Button>
                    </Stack>
                    <Map lat={tempLat} long={tempLong}/>

                </Stack>

            </Card>

        </div>

    );

}

export default HomePage;