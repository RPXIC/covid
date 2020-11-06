import React from 'react'
import { Header, Body, Loader} from 'components'
import useSummary from 'hooks/useSummary'
import dateParser from 'utils/dateParser'

const Home = () => {
    const { loading, global, countries, date } = useSummary()

    if (loading) return <Loader />
  
    return (
      <>
        <Header loading={loading} global={global} date={dateParser(date)} />
        <Body countries={countries} />
      </>
    )
}

export default Home