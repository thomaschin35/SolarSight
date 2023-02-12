import React from 'react';
import { Box, Button, Stack, Popover, Typography } from '@mui/material';
import SolarPanel from './solar-panel.jpg';
import './SolarPanelInfo.css'

function SolarPanelInfo() {
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <img src={SolarPanel} alt="Solar Panel" height="300px" width="1000px"/>
            </Box>

            <h2 style={{textAlign: 'center'}}>How a Solar Panel Works:</h2>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <BasicPopover></BasicPopover>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', paddingLeft: 15, paddingRight: 15}}>
                <text>
                    <br />
                    The goal of this project is to create a predictive model to decipher the best spot for solar panels. Some of the 
                    things we looked at include, but not limited to: humidity, elevation, temperature, etc. Currently, our model is 
                    restricted to Georgia. We would love to eventually expand to the whole of the United States and then nationwide. We would
                    also love to be able to make our model even more accurate by looking at a larger dataset and refining our algorithm. <br /><br />

                    Sunlight is converted into electrical energy through mirrors or photovoltaic panels. This energy is stored in 
                    batteries or thermal storage. Solar radiation is, at its core, light, while also being known as electromagnetic 
                    radiation. The amount of solar radiation that each spot on Earth receives varies, thus the purpose of our project
                    is to tell you it you're in a good spot to receive that solar radiation. <br /><br />

                    The two main types of solar energy technologies include photovoltaics and concentrating solar-thermal power.
                    Photovoltaic is utilized in solar panels. The cells in the panel absorb the sunlight that hits said panel.
                    This forces the electrical charges to move in response to an internal electrical field, causing electricity 
                    to flow. The cells initially turn the light into direct current, but then an inverter is used to convert
                    the current to alternating current, which is what most household devices use. <br /><br />

                    Concentrating solar-thermal power systems use mirrors to concentrate sunlight onto receivers that convert the
                    energy to heat which can be stored for later use. This method is usually used in very large power plants. <br /><br />

                    <h className = "section-header">
                        Advantages of solar energy include: <br /><br />
                    </h>
                    1. Solar energy is renewable. <br />
                    Solar energy creates no carbon emissions or other greenhouse gases, as well as avoiding the environmental damage 
                    associated with other fossil fuels. Solar energy uses little to no water, unlike power plants that generate 
                    electricity using steam turbines. <br /><br />
                    2. Solar energy is cheaper for the average consumer. <br />
                    Solar energy reduces reliance on the grid and helps save on the electricity bill. There may even be excess power
                    that you can sell to the utility. <br /><br />
                    3. Solars panels may improve home value. <br />
                    Prospective buyers may pay more for a house with solar panels installed. Residential solar energy systems are highly 
                    valued and have been known to increase a home's resale value - up to 15,000 more than their neighbors. <br /><br />
                    4. Low maintenance costs and electricity in any climate. <br />
                    Solar panels are easy to maintain as the parts don't move, meaning they can't wear out over time. Just keeping them
                    clean and in good physical condition makes them last for an average of 25 years. Solar energy is also available in 
                    any climate, although subject to temporary weather disruption. However, cold and snow don't affect productivity. <br /><br />
                    
                    <h className = "section-header">
                        Disadvantages of solar energy include: <br /><br />
                    </h>
                    1. High initial costs of installing panels. <br />
                    While currently the initial costs are relatively high, as the industry expands those costs are also decreasing. 
                    Leasing options may may reduce those initial costs, but if you choose to buy you will need to live in your home for
                    a number of years before the system repays the initial cost. Solar energy is a long-term investment better suited for
                    property owners than renters. <br /><br />
                    2. Solar energy storage is expensive <br />
                    A major issue has been the decline during bad weather. However, with the new techologies being developed in batteries, 
                    this issue has been diminishing as batteries like flow batteries promise scale and durable power storage for the days 
                    with low solar energy. <br /><br />
                    3. Solar doesn't work for all roofs.<br />
                    Orientation matters. If your roof angle is offset from the sun, solar won't be as effective as it could be on another
                    roof. The material of the roof also affects the feasibility of solar panels. If the roof is made with material that isn't 
                    asphalt shingles, metal, and tiles, then installation may be more expensive - calling back to the initial high cost.<br /><br />
                    4. Dependency on sunlight. <br />
                    While obvious, solar panels need sunlight to generate electricity. Batteries would be necessary for the days when it's cloudy 
                    with a minimal amount of sunlight and for nights, which is one of the more expensive parts of the system. Many people also use
                    wind power to try to compensate for this shortfall. 


                    <br /><br /><br />
                    <h className = "section-header">
                        Sources: <br />
                    </h>
                    <a href="https://www.energy.gov/eere/solar/how-does-solar-work">
                        https://www.energy.gov/eere/solar/how-does-solar-work
                    </a>
                    <br />
                    <a href="https://www.constellation.com/energy-101/energy-innovation/solar-energy-pros-and-cons.html">
                        https://www.constellation.com/energy-101/energy-innovation/solar-energy-pros-and-cons.html
                    </a>
                    <br /><br />
                    <h className = "section-header">
                        Contributors: <br />
                    </h>
                    Thomas Chin, Uma Dukle, Adhish Rajan, Hannah Glamm
                </text>
            </Box>
        </>
    );
}

function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button className = "glow-on-hover" aria-describedby={id} variant="contained" onClick={handleClick}>
        Fun Fact!
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
            The amount of sunlight that strikes the earth's surface in an 
            hour and a half is enough to handle the entire world's energy consumption for a full year
        </Typography>
      </Popover>
    </div>
  );

}

export default SolarPanelInfo;