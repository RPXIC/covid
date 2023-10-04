import { useEffect, useState } from 'react'
import Loader from './Loader'
import './Flag.sass'

export const Flag = ({ flag }) => {
  let [icon, setIcon] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        let importedIcon = await import(`../assets/flags/${flag.toLowerCase()}.svg`)
        setIcon(importedIcon.default)
      } catch (error) {
        console.log(error)
      }
    })()
    //eslint-disable-next-line
  }, [])

  return icon ? <img alt={`${flag} flag`} src={icon} className='image' /> : <Loader />
}
