import { useState } from 'react'
import { Header, Body, Loader } from 'components'
import useSummary from 'hooks/useSummary'
import dateParser from 'utils/dateParser'

const Home = () => {
  const { loading, global, countries, date, message } = useSummary()
  const [filter, setFilter] = useState()

  if (loading) return <Loader />

  return (
    <>
      {global && <Header loading={loading} global={global} date={dateParser(date)} setFilter={setFilter} />}
      {countries && <Body countries={countries} filter={filter} />}
      {!countries | !global && <p>API error</p>}
      {message && <p>{message}</p>}
    </>
  )
}

export default Home
