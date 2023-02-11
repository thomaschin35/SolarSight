import * as React from 'react';
import map from "./us-states-map.jpg";
import {Box} from '@mui/material';



class USMap extends React.Component {
    render() {
        return (
            <>
                <div>
                    <img src={map} alt = "Map of US"/>
                    <div className = "head-image">
                        {/* <img src={blankMap} alt="Map of US"/> */}
                    </div>
                </div>
            </>
        )
    }
}

export default USMap;