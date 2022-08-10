import { Link } from 'react-router-dom'
import './CountryCard.sass'

const CountryCard = ({ Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
  <div className='card'>
    <Link to={`/${Country.toLowerCase()}`} className='title'>
      {Country.toUpperCase()}
    </Link>
    <img src={`https://countryflagsapi.com/png/${CountryCode.toLowerCase()}`} alt='flag' className='image' />
    <div className='middle'>
      <div className='text'>New confirmed: {NewConfirmed}</div>
      <div className='text'>NewDeaths: {NewDeaths}</div>
      <div className='text'>NewRecovered: {NewRecovered}</div>
      <div className='text'>TotalConfirmed: {TotalConfirmed}</div>
      <div className='text'>TotalDeaths: {TotalDeaths}</div>
      <div className='text'>TotalRecovered: {TotalRecovered}</div>
    </div>
  </div>
)

export default CountryCard
