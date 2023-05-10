import React from 'react'
import {UserContext} from '../App'
import {NameContext} from '../App'
function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user=>{
                    return(
                        <NameContext.Consumer>
                        {
                           name=>{
                            return <div><h1> Hi {user} {name}</h1></div>
                           }
                        }
                        </NameContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF