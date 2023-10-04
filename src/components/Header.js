import Searcher from './Searcher'
import dateParser from 'utils/dateParser'
import './Header.sass'

const Header = ({ summary, setFilter }) => {
  const { last_update, confirmed, deaths, recovered, recovered_diff, confirmed_diff, deaths_diff } = summary

  return (
    <header className='header'>
      <div className='header__top'>Latest update: {dateParser(last_update)}</div>
      <h1 className='header__title'>world cases</h1>
      <div className='header__body'>
        <div className='header__element'>
          <p className='header__text'>New confirmed: {confirmed_diff}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>New deaths: {deaths_diff}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>New recovered: {recovered_diff}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>Total confirmed: {confirmed}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>Total Deaths: {deaths}</p>
        </div>
        <div className='header__element'>
          <p className='header__text'>Total recovered: {recovered}</p>
        </div>
      </div>
      <Searcher setFilter={setFilter} />
    </header>
  )
}

export default Header
