import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LaunchList from './components/LaunchList';
import Select from './components/Select';
import './index.css';
import { getCompanyInfo, getPastLaunches, getPastLaunchesByYear } from './services';

const App = () => {

  const [launches, setLaunches] = useState([])
  const [info, setInfo] = useState('')
  const [select, setSelect] = useState('')

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }

  useEffect(() => {
    getCompanyInfo().then(res => {
      setInfo(res.data.name)
    })
    getPastLaunches().then(res => {
      setLaunches(res.data)
    })
  }, [])

  useEffect(() => {
    getPastLaunchesByYear(select).then(res => {
      setLaunches(res.data)
    })
  }, [select])
  return (
    <>
      <Header info={info} />
      <Select handleSelect={handleSelect} />
      <LaunchList arr={launches} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);