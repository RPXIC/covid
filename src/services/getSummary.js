const getSummary = async () => {
    const res = await fetch('https://api.covid19api.com/summary')
    const response = await res.json()
    const { Global, Countries, Date } = response

    return { Global, Countries, Date }
}
export default getSummary