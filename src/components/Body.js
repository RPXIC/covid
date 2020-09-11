import React from 'react'
import CountryCard from 'components/CountryCard'
import './Body.sass'

const Body = ({ countries }) => {

    return (
        <div className="container">
            {countries.map(({ Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) =>
                <CountryCard
                    Country={Country}
                    key={CountryCode}
                    CountryCode={CountryCode}
                    NewConfirmed={NewConfirmed}
                    NewDeaths={NewDeaths}
                    NewRecovered={NewRecovered}
                    TotalConfirmed={TotalConfirmed}
                    TotalDeaths={TotalDeaths}
                    TotalRecovered={TotalRecovered}
                />
            )}
        </div>
    )
}
export default Body