import React, { useContext } from 'react'
import { LoadingContext } from '../contexts/Loading'


function ComponentA() {
    const {loading, setLoading} = useContext(LoadingContext)
    console.log(loading, "loading from the context")
  return (
    <div>

      <h1>Component A</h1>
    </div>
  )
}

export default ComponentA
