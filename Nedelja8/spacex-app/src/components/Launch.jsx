import React from 'react'

const Launch = ({ launch }) => {
    return (
        <div className="launch">
            <div className="inner-div-0"><img src={launch.links.mission_patch} alt="Launch" /></div>
            <div className="inner-div-1"><span>{launch.rocket.rocket_name}</span></div>
            <div className="inner-div-2"><span>{launch.launch_year}</span></div>
        </div>
    )
}

export default Launch