import { useState, useEffect } from 'react'
import getCountryConfirmedLastMonth from 'services/getCountryConfirmedLastMonth'

const useGetCountryConfirmedLastMonth = (country) => {
    const [loading, setLoading] = useState(true)
    const [chartData, setChartData] = useState()

    useEffect(() => {
        (async () => {
            const result = await getCountryConfirmedLastMonth(country)
            setChartData(result)
            setLoading(false)
        })()
    }, [country])

    return { loading, chartData }
}

export default useGetCountryConfirmedLastMonth