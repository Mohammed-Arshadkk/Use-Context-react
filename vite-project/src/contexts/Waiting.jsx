import {React,createContext,useState} from 'react'

const WaitingContext = createContext()

const WaitingProvider = ({Child})=> {
    const [Waiting,setWaiting] = useState(false)

    return (
        <WaitingProvider value={Waiting,setWaiting}>
            {Child}
        </WaitingProvider>
    )
}

export {WaitingContext,WaitingProvider}