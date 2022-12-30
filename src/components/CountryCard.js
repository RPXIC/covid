import { Link } from 'react-router-dom'
import { Flag } from './Flag'
import './CountryCard.sass'

const CountryCard = ({ Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
  <Link to={`/${Country.toLowerCase()}`} className='card'>
    <h2 className='title'>{Country.toUpperCase()}</h2>
    <Flag flag={CountryCode.toLowerCase()} />
    <div className='middle'>
      <div className='text'>New confirmed: {NewConfirmed}</div>
      <div className='text'>NewDeaths: {NewDeaths}</div>
      <div className='text'>NewRecovered: {NewRecovered}</div>
      <div className='text'>TotalConfirmed: {TotalConfirmed}</div>
      <div className='text'>TotalDeaths: {TotalDeaths}</div>
      <div className='text'>TotalRecovered: {TotalRecovered}</div>
    </div>
  </Link>
)

export default CountryCard
