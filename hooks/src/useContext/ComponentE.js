import React ,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,NameContext } from '../App'

function ComponentE() {
    const first= useContext(UserContext)
    const second =useContext(NameContext)
  return (
    <div>
        <ComponentF/>
        <h2>{first} {second}</h2>
    </div>
  )
}

export default ComponentE