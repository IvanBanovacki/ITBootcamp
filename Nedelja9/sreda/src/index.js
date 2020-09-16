import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import UserSearch from './components/UserSearch';
import UsersList from './components/UsersList';
import {getAllUsers} from './services'

const App = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      getAllUsers().then(res => {
        setUsers(res.data.data)
      })
    },[])
    
    console.log(users);

  return(

  <Router>
    <nav>
      <Link to='/'>User List</Link>
      <Link to='/search'>Search</Link>
    </nav>

    <Switch>

      <Route exact path='/'>
        <UsersList users={users} setUsers={setUsers}/>
      </Route>

      <Route path='/search'>
        <UserSearch users={users} setUsers={setUsers} />
      </Route>
      
    </Switch>

  </Router>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

