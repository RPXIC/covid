import { useState, useEffect } from 'react'
import getSummary from 'services/getSummary'

const useSummary = () => {
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState()
  const [global, setGlobal] = useState()
  const [date, setDate] = useState()
  const [message, setMessage] = useState('')

  useEffect(() => {
    ;(async () => {
      const result = await getSummary()
      const { Global, Countries, Date, Message } = result
      setGlobal(Global)
      setCountries(Countries)
      setDate(Date)
      setLoading(false)
      setMessage(Message)
    })()
  }, [])

  return { loading, countries, global, date, message }
}

export default useSummary
