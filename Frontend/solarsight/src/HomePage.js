import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography, TextField } from '@mui/material';
import { Card } from '@mui/material';
import Map from './Components/Map';



function HomePage() {
    // Prevent page reload, clear input, set URL and push history on submit


    return (
        <div>
            <Typography variant="h1" align="center" padding={5}>
                Solar Sight
            </Typography>

            <Card sx={{ padding: 10, display: 'flex', margin: 'auto', justifyContent: 'center', backgroundColor: '#C2D3CD' }}>
                <Stack spacing={1} sx={{display: 'flex', margin: 'auto', justifyContent: 'center', alignItems:'center'}}>
                    <Stack spacing={3} direction="row" >
                        <Typography variant="h5" margin={1}>
                            Enter in a Longtitude and Latitude:
                        </Typography>
                        <TextField id="outlined-basic" label="Longtitude" variant="outlined" />
                        <TextField id="outlined-basic" label="Latitude" variant="outlined"  />
                    </Stack>
                    <Map zoomLevel={17} />

                </Stack>

            </Card>

        </div>

    );

}

export default HomePage;