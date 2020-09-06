import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({ string, URL }) => {
    return (
        <>
            <Emoji URL={URL} />
            <Description string={string} />
        </>

    )
}

export default Card