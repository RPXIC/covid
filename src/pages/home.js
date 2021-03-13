import React, { useState } from 'react'
import { Header, Body, Loader } from 'components'
import useSummary from 'hooks/useSummary'
import dateParser from 'utils/dateParser'

const Home = () => {
  const { loading, global, countries, date } = useSummary()
  const [filter, setFilter] = useState()

  if (loading) return <Loader />

  return (
    <>
      <Header
        loading={loading}
        global={global}
        date={dateParser(date)}
        setFilter={setFilter}
      />
      <Body countries={countries} filter={filter} />
    </>
  )
}

export default Home
