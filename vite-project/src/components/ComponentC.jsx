import React, { useContext } from 'react'
import { WaitingContext } from '../contexts/Waiting'

function ComponentC() {
  const {Waiting,setWaiting} = useContext(WaitingContext) 
  return (
    <div>
      <h1>Component C</h1>
    </div>
  )
}

export default ComponentC
