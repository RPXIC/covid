import React from 'react'
import { Loader } from 'components'
import { useParams } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import useGetCountryConfirmedLastMonth from 'hooks/useGetConfirmedLastMonth'

const Country = () => {
    const { Country } = useParams()
    const { loading, chartData } = useGetCountryConfirmedLastMonth(Country)

    if (loading) return <Loader />

    let actives = []
    let days = []

    if (chartData) {
        chartData.forEach(day => {
            actives.push(day.Active)
            days.push(day.Date)
        })
    }

    const data = {
        labels: days,
        datasets: [{
            label: `Active cases in ${Country}`,
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: actives
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true
    }

    return (
        <div style={{width: '90%', height: '500px'}}>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Country