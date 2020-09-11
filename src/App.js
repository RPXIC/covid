import React from 'react'
import Header from 'components/Header'
import Body from 'components/Body'
import useSummary from 'hooks/useSummary'
import 'App.sass'

const App = () => {
  const { loading, global, countries, date } = useSummary()
  console.log(countries)

  if (loading) return <div className="App">loading...</div>

  return (
    <>
      <Header loading={loading} global={global} date={date} />
      <Body countries={countries} />
    </>
  )
}

export default App
