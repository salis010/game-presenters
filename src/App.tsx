import React, { FunctionComponent, useEffect } from 'react'
import { GAME_PRESENTERS_ENDPOINT } from './constants/endpoints'

export const App: FunctionComponent = () => {
  useEffect(() => {
    fetch(GAME_PRESENTERS_ENDPOINT)
      .then(async res => await res.json())
      .then(data => console.log(data))
      .catch(err => console.log(`There was an error with getting game presenters data: ${err as string}`))
  }, [])
  return (
    <h1 className='font-bold text-5xl text-red-300 ml-[-10px]'>Hello world!</h1>
  )
}
