import React, { useState } from 'react'
import User from './User'

const UserSearch = ({users, setUsers}) => {

    const [filter, setFilter] = useState('')

    let filteredUsers = users.filter(user => 
        user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
        user.last_name.toLowerCase().includes(filter.toLowerCase()) 
    )

    return(
        <div>
            <input type="text" onChange={(e) => setFilter(e.target.value)}/>
            {filteredUsers.map(user => 
                <User 
                    key={user.id} 
                    user={user} 
                    setUsers={setUsers} 
                    users={users} 
                />
            )}
        </div>
    )
}

export default UserSearch