import React from 'react'
import useSummary from 'hooks/useSummary'
import './Header.sass'

//https://www.countryflags.io/be/flat/64.png - flags API

const Header = () => {
    const { loading, global, countries, date } = useSummary()

    if (loading) return <div className="App">loading...</div>

    return (
        <header className="header">
            <div className="header__top">Latest update: {date}</div>
            <div className="header__body">
                <div className="header__element"><p className="header__text">New confirmed: {global.NewConfirmed}</p></div>
                <div className="header__element"><p className="header__text">New deaths: {global.NewDeaths}</p></div>
                <div className="header__element"><p className="header__text">New recovered: {global.NewRecovered}</p></div>
                <div className="header__element"><p className="header__text">Total confirmed: {global.TotalConfirmed}</p></div>
                <div className="header__element"><p className="header__text">Total Deaths: {global.TotalDeaths}</p></div>
                <div className="header__element"><p className="header__text">Total recovered: {global.TotalRecovered}</p></div>
            </div>
        </header>
    )
}

export default Header