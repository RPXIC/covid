import CountryCard from './CountryCard'
import { summaryByISO3 } from 'data/summaryByISO3'
import './Body.sass'

const Body = ({ countries, filter }) => {
  const countriesFiltered = filter ? countries.filter((country) => country?.name?.toLowerCase().includes(filter.toLowerCase())) : countries

  return (
    <main className='main'>
      {countriesFiltered.map(({ name, iso2, iso3 }) => (
        <CountryCard Country={name} key={iso2} CountryCode={iso2} iso3={iso3} newData={summaryByISO3[iso3]} />
      ))}
    </main>
  )
}

export default Body
