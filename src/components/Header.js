import React from 'react'
import Searcher from './Searcher'
import './Header.sass'

const Header = ({ loading, global, date, setFilter }) => {
  if (loading) return <div className='App'>loading...</div>

  return (
    <header className='header'>
      <div className='header__top'>Latest update: {date}</div>
      <h1 className='header__title'>world cases</h1>
      <div className='header__body'>
        <div className='header__element'>
          <p className='header__text'>New confirmed: {global.NewConfirmed}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>New deaths: {global.NewDeaths}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>New recovered: {global.NewRecovered}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>
            Total confirmed: {global.TotalConfirmed}
          </p>
        </div>
        <div className='header__element'>
          <p className='header__text'>Total Deaths: {global.TotalDeaths}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>
            Total recovered: {global.TotalRecovered}
          </p>
        </div>
      </div>
      <Searcher setFilter={setFilter} />
    </header>
  )
}

export default Header
