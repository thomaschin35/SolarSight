import React from 'react';
import { PropTypes } from 'prop-types';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Typography, AppBar } from '@mui/material';
import { Box } from '@mui/material';
import USMap from "./USMap";
import HomePage from './HomePage';
import SolarPanelInfo from './SolarPanelInfo';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: "#DBE9EE" }}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Dynamic Map" {...a11yProps(0)} />
                    <Tab label="Solar Power in the US" {...a11yProps(1)} />
                    <Tab label="Solar Panels" {...a11yProps(2)} />
                </Tabs>
            </Box>


            <TabPanel value={value} index={0}>

                <HomePage></HomePage>
            
            </TabPanel>
            <TabPanel value={value} index={1}>

                <USMap></USMap>

            </TabPanel>
            <TabPanel value={value} index={2}>

                <SolarPanelInfo></SolarPanelInfo>

            </TabPanel>

        </Box>
    );
}
