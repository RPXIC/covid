import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [countries, setCountries] = useState()
  const [global, setGlobal] = useState()
  const [date, setDate] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.covid19api.com/summary')
      const response = await res.json()
      const { Global, Countries, Date } = response
      setGlobal(Global)
      setCountries(Countries)
      setDate(Date)
      console.log(response)
    })()
  }, [])

  if (!date || !global || !countries) return <div className="App">loading...</div>

  return (
    <div className="App">
      <div>Latest update: {date}</div>
      <div>New confirmed: {global.NewConfirmed}</div>
      <div>New deaths: {global.NewDeaths}</div>
      <div>New recovered: {global.NewRecovered}</div>
      <div>Total confirmed: {global.TotalConfirmed}</div>
      <div>Total Deaths: {global.TotalDeaths}</div>
      <div>Total recovered: {global.TotalRecovered}</div>
    </div>
  )
}

export default App
