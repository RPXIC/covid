const getCountryConfirmedLastMonth = async (country) => {
	const date = new Date()
	const month = date.getMonth()
	const year = date.getFullYear()
	const fromMonth = month === 0 ? 11 : month
	const fromYear = month === 0 ? date.getFullYear() - 1 : date.getFullYear()
	console.log(fromMonth)
	const res = await fetch(
		`https://api.covid19api.com/country/${country}?from=${fromYear}-${fromMonth}-01T00:00:00Z&to=${year}-${month}-01T00:00:00Z`
	)
	const response = await res.json()

	return response
}

export default getCountryConfirmedLastMonth
