import { useState } from 'react'
import { Header, Body } from 'components'
import useSummary from 'hooks/useSummary'

const Home = () => {
  const { summary, countries } = useSummary()
  const [filter, setFilter] = useState()

  return (
    <>
      <Header summary={summary} setFilter={setFilter} />
      <Body countries={countries} filter={filter} />
    </>
  )
}

export default Home
