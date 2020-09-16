import React from 'react'

const UsersList = ({users, setUsers}) => {
    return(
        users.map(user => <p key={user.id}>First Name: {user.first_name} || Last Name: {user.last_name}</p>)
    )
}

export default UsersList