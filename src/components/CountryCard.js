import { Flag } from './Flag'
import './CountryCard.sass'

const CountryCard = ({ Country, CountryCode, newData }) => (
  <div className='card'>
    <h2 className='title'>{Country.toUpperCase()}</h2>
    <Flag flag={CountryCode} />
    <div className='middle'>
      <div className='text'>New confirmed: {newData?.new_cases}</div>
      <div className='text'>NewDeaths: {newData?.new_deaths}</div>
      <div className='text'>TotalConfirmed: {newData?.total_cases}</div>
      <div className='text'>TotalDeaths: {newData?.total_deaths}</div>
      <div className='text'>TotalRecovered: {newData?.total_recovered}</div>
    </div>
  </div>
)

export default CountryCard
