import CountryCard from './CountryCard'
import './Body.sass'

const Body = ({ countries, filter }) => {
  const countriesFiltered = filter ? countries.filter((country) => country.Country.toLowerCase().includes(filter.toLowerCase())) : countries

  return (
    <main className='main'>
      {countriesFiltered.map(({ Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
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
      ))}
    </main>
  )
}

export default Body
