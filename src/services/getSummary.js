const getSummary = async () => {
    const res = await fetch('https://api.covid19api.com/summary')
    const response = await res.json()

    return response
}
export default getSummary