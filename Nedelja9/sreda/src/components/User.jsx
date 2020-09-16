import React from 'react'

const User = ({user, setUsers, users}) => {

    const handleDelete = () => {
        let tmp = [...users]
        tmp.splice(users.findIndex(el => user.first_name === el.first_name), 1)
        setUsers(tmp)
    }
    return(
        <div>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>  
    )
}

export default User