import React from 'react'
import { Loader } from 'components'
import { useParams, Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import useGetCountryConfirmedLastMonth from 'hooks/useGetConfirmedLastMonth'
import handleChartData from 'utils/handleChartData'
import './country.sass'

const Country = () => {
    const { Country } = useParams()
    const { loading, chartData } = useGetCountryConfirmedLastMonth(Country)

    if (loading) return <Loader />

    const { data, options } = handleChartData(chartData, Country)

    return (
        <div className="chart">
            <Link to="/" className="chart__link">Go back</Link>
            <div className="chart__content">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default Country