const getCountryConfirmedLastMonth = async (country) => {
    const getDate = new Date()
    const month = getDate.getMonth()
    const res = await fetch(`https://api.covid19api.com/country/${country}?from=2020-${month}-01T00:00:00Z&to=2020-${month+1}-01T00:00:00Z`)
    const response = await res.json()

    return response
}

export default getCountryConfirmedLastMonth