import React from 'react'
import './CountryCard.sass'
import { Link } from 'react-router-dom'

const CountryCard = ({ Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => {

    return (
        <div className="card">
            <Link to={`/${Country.toLowerCase()}`} className="title">{Country.toUpperCase()}</Link>
            <img src={`https://www.countryflags.io/${CountryCode.toLowerCase()}/shiny/64.png`} alt="flag" className="image" />
            <div className="middle">
                <div className="text">New confirmed: {NewConfirmed}</div>
                <div className="text">NewDeaths: {NewDeaths}</div>
                <div className="text">NewRecovered: {NewRecovered}</div>
                <div className="text">TotalConfirmed: {TotalConfirmed}</div>
                <div className="text">TotalDeaths: {TotalDeaths}</div>
                <div className="text">TotalRecovered: {TotalRecovered}</div>
            </div>
        </div>
    )
}
export default CountryCard