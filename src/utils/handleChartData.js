import dateParser from 'utils/dateParser'

const handleChartData = (chartData, Country) => {
	let actives = []
	let days = []

	if (chartData) {
		chartData.forEach((day) => {
			actives.push(day.Active)
			days.push(dateParser(day.Date))
		})
	}

	const data = {
		labels: days,
		datasets: [
			{
				label: `Last active cases in ${Country}`,
				backgroundColor: 'rgba(0,255,0,1)',
				borderColor: 'black',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(0,255,0,0.2)',
				hoverBorderColor: '#FFFF00',
				data: actives,
			},
		],
	}

	const options = {
		maintainAspectRatio: false,
		responsive: true,
	}

	return { data, options }
}

export default handleChartData
