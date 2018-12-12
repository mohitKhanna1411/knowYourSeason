import React from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
    summer : {
        seasonText : "Let's hit the beach",
        icon : "sun"
    },
    winter : {
        seasonText : "Burr, its chilly",
        icon : "snowflake"
    }
};
const getSeason = (lat,month) => {
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
const season = getSeason(props.lat, new Date().getMonth());
const { seasonText , icon } = seasonConfig[season];
return (
        <div className = {`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
        <h1>{seasonText}</h1>
        <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;