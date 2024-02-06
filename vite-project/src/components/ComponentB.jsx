import React from 'react'
import {userContext} from '../../src/App'

function ComponentB() {
  return (
    <div>
      <userContext.Consumer>
        {
            user => {
                return <div>User Context Value {user}</div>
            }
        }
      </userContext.Consumer>
    </div>
  )
}

export default ComponentB
