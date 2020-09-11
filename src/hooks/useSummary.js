import { useState, useEffect } from 'react'
import getSummary from 'services/getSummary'

const useSummary = () => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState()
    const [global, setGlobal] = useState()
    const [date, setDate] = useState()

    useEffect(() => {
        (async () => {
            const result = await getSummary()
            const { Global, Countries, Date } = result
            setGlobal(Global)
            setCountries(Countries)
            setDate(Date)
            setLoading(false)
        })()
    }, [])

    return { loading, countries, global, date }
}
export default useSummary