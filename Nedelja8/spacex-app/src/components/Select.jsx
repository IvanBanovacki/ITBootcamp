import React from 'react'

const Select = ({ handleSelect }) => {

    let yearsArray = []

    const optionFill = () => {
        for (let i = 2006; i < 2021; i++) {
            if (i !== 2011) {
                yearsArray.push(i)
            }
        }
        return yearsArray.map(option => <option key={option} value={option}>{option}</option>)
    }
    return (
        <select className="select-launch" onChange={handleSelect}>
            {optionFill()}
        </select>
    )
}

export default Select