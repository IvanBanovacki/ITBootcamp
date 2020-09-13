import React from 'react'
import Launch from './Launch'

const LaunchList = ({ arr }) => {
    return (
        <div className="launch-list">
            {arr.map(launch => <Launch key={launch.flight_number} launch={launch} />)}
        </div>
    )
}

export default LaunchList