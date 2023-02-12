import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography, TextField, Alert } from '@mui/material';
import { Card } from '@mui/material';
import Map from './Components/Map';
import solarImage from './solarImage.jpg'



function HomePage() {
    // Prevent page reload, clear input, set URL and push history on submit

    const [longtitude, setlng] = useState(-83.345324);
    const [latitude, setlt] = useState(32.9);
    const [longCalc, setLong] = useState(longtitude);
    const [latCalc, setLat] = useState(latitude);
    const [score, setScore] = useState();

    const [red, setRed] = useState(false);
    const [orange, setOrange] = useState(false);
    const [yellow, setYellow] = useState(false);


    const handleLong = async (e) => {
        setLong(e.target.value);
    }
    const handleLat = async (e) => {
        setLat(e.target.value);
    }

    const calculateScore = (e) => {
        if (score < 0.25) {
            setYellow(true);
        } 
    }
    return (
        <div>
            <Typography variant="h2" align="center" padding={2} >
                Solar Sight
            </Typography>

            <Stack direction="row">
                <Card sx={{ padding: 5, display: 'flex', margin: 'auto', backgroundColor: '#C0D6DF', minHeight: '500px' }}>
                    <Stack spacing={1} sx={{ display: 'flex', margin: 'auto', width: '40%' }}>
                        
                        <img src={solarImage} alt="SolarImage"  height={300} />
                        <h3> Solar Sight's Goal:</h3>
                        {/* <img src={solarIcon} alt = "Solar Icon" width={60}/> */}
                        <Typography variant="body1" align="left" fontSize={'110%'}>
                            Find the most optimal location to place Solar Panels in <b>Georgia</b> using data from National Solar Radiation Database.
                            We have created an algorithm to score locations based off of humidity, wind speed, and temperature data.
                        </Typography>
                        <h3> <br></br>To find the most optimal location: </h3>
                        <Typography variant="body1" fontWeight={100}>
                            1. Drag the marker around Georgia to find your location <br></br>
                            2. Enter in a coordinate in the range of Latitude: [31, 35], Longtitude [-81, -85] <br></br>
                            3. Press Calculate Score -- Score Ranges from 0 - 1, with 1 being most optimal
                        </Typography>
                        <br></br>
                        <Typography variant="h5" align='center'>
                            CALCULATED SCORE: <br></br>{longCalc + latCalc}
                        </Typography>
                        


                    </Stack>
                    <Box sx={{ width: '50%' }}>
                        <Stack spacing={2} sx={{ display: 'flex', margin: 'auto', alignItems: 'center' }}>
                            <Stack spacing={3} direction="row" >
                                <Box paddingBottom={4} paddingTop={4}>
                                    <Typography variant="h6" margin={1} textAlign="center">
                                        Enter in a Longtitude and Latitude:
                                    </Typography>
                                    <Stack spacing={1} direction='row'>
                                        <TextField id="longField" label="Longtitude" variant="filled" onChange={handleLong} size="small"/>
                                        <TextField id="latField" label="Latitude" variant="filled" onChange={handleLat} size="small" />
                                        <Box sx={{height: '50px', width: '100px', display: 'flex', justifyContent: 'center'}} >
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    // take this user input and feed it into the python method
                                                }}
                                            >
                                                Calculate Score
                                            </Button>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Map lat={latitude} long={longtitude} />
                        </Stack>
                    </Box>
                </Card>
            </Stack>
        </div>

    );

}

export default HomePage;