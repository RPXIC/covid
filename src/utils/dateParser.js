const dateParser = (date) => {
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth()
  const year = new Date(date).getFullYear()
  const hours = new Date(date).getHours()
  const minutes = new Date(date).getMinutes()

  const parsedDate = `${day}/${month}/${year} ${hours}:${minutes}h.`

  return parsedDate
}

export default dateParser
