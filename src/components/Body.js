import React from 'react'
import { CountryCard } from 'components'
import './Body.sass'

const Body = ({ countries }) => {

    return (
        <main className="main">
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
        </main>
    )
}

export default Body