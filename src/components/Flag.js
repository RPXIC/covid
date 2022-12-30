import { useEffect, useState } from 'react'
import './Flag.sass'
import Loader from './Loader'

export const Flag = ({ flag }) => {
  let [icon, setIcon] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        let importedIcon = await import(`../assets/flags/${flag}.svg`)
        setIcon(importedIcon.default)
      } catch (error) {
        console.log(error)
      }
    })()
    //eslint-disable-next-line
  }, [])

  return icon ? <img alt={`${flag} flag`} src={icon} className='image' /> : <Loader />
}
