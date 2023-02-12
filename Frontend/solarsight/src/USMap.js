import * as React from 'react';
import map from "./us-solar-power.png";
import { Box, Table, TableRow, TableCell, TableContainer, TableBody, TableHead, Paper } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';



class USMap extends React.Component {
    render() {
        return (
            <>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <img src={map} alt = "Map of US"/>
                </Box>
                <Box>
                    <DenseTable></DenseTable>

                </Box>
            </>
        )
    }
}

function createData(name, precip, elevation, temp, output) {
  return { name, precip, elevation, temp, output };
}

const rows = [
  createData('Alabama', 56.00, 500, 62.8, 582916),
  createData('Alaska', 29.03, 1900, 26.6, 10000),
  createData('Arizona', 11.80, 4100, 60.3, 5278019),
  createData('Arkansas', 49.72, 650, 60.4, 61100),
  createData('California', 22.97, 2900, 59.4, 28331513),
  createData('Colorado', 16.98, 6800, 45.1, 1218220),
  createData('Connecticut', 50.07, 500, 49, 600000),
  createData('Delaware', 45.82, 60, 55.3, 298),
  createData('Florida', 54.73, 100, 70.7, 3901445),
  createData('Georgia', 50.22, 600, 63.5, 2160770),
  createData('Hawaii', 50.33, 3030, 70, 1543000),
  createData('Idaho', 16.91, 5000, 44.4, 674000),
  createData('Illinois', 38.52, 600, 51.8, 3000000),
  createData('Indiana', 41.86, 795, 51.7, 488000),
  createData('Iowa', 34.50, 1100, 47.8, 12300),
  createData('Kansas', 32.43, 2000, 54.3, 43780),
  createData('Kentucky', 46.27, 750, 55.6, 408000),
  createData('Louisiana', 59.15, 100, 66.4, 50),
  createData('Maine', 45.49, 600, 41, 187000),
  createData('Maryland', 42.70, 350, 54.2, 2490000),
  createData('Massachusetts', 48.42, 500, 47.9, 1163776),
  createData('Michigan', 32.79, 900, 44.4, 470000),
  createData('Minnesota', 28.61, 1200, 41.2, 1248833),
  createData('Mississippi', 56.48, 300, 63.4, 139800),
  createData('Missouri', 42.52, 800, 54.5, 286763),
  createData('Montana', 14.92, 3400, 42.7, 17),
  createData('Nebraska', 26.66, 2600, 48.8, 350),
  createData('Nevada', 9.46, 5500, 49.9, 4810511),
  createData('New Hampshire', 44.84, 1000, 43.8, 164.5),
  createData('New Jersey', 48.02, 250, 52.7, 1164721),
  createData('New Mexico', 14.24, 5700, 53.4, 1365900),
  createData('New York', 42.87, 1000, 45.4, 4000000),
  createData('North Carolina', 46.92, 700, 59, 7451338),
  createData('North Dakota', 18.59, 1900, 40.4, 80446),
  createData('Ohio', 39.24, 850, 50.7, 162000),
  createData('Oklahoma', 37.62, 1300, 59.6, 1845),
  createData('Oregon', 43.62, 3300, 48.4, 7000),
  createData('Pennsylvania', 42.77, 1100, 48.8, 2100),
  createData('Rhode Island', 49.96, 200, 50.1, 772000),
  createData('South Carolina', 49.24, 350, 62.4, 858546),
  createData('South Dakota', 22.02, 2200, 45.2, 209000),
  createData('Tennessee', 51.85, 900, 57.6, 232000),
  createData('Texas', 35.00, 1700, 64.8, 4365125),
  createData('Utah', 15.79, 6100, 48.6, 2186424),
  createData('Vermont', 42.58, 1000, 42.9, 51),
  createData('Virginia', 42.76, 950, 55.1, 949111),
  createData('Washington', 38.67, 1700, 48.3, 355),
  createData('West Virginia', 44.36, 1500, 51.8, 134000),
  createData('Wisconsin', 33.11, 1050, 43.1, 234000),
  createData('Wyoming', 13.23, 6700, 42, 500000)
];

function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="right">Yearly Precip.&nbsp;(in)</TableCell>
            <TableCell align="right">Avg Elevation&nbsp;(ft)</TableCell>
            <TableCell align="right">Avg Temp&nbsp;(F)</TableCell>
            <TableCell align="right">Solar Output&nbsp;(MWh)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.precip}</TableCell>
              <TableCell align="right">{row.elevation}</TableCell>
              <TableCell align="right">{row.temp}</TableCell>
              <TableCell align="right">{row.output}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default USMap;