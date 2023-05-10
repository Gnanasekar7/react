import React from 'react'
const Greet=(props)=> {
    
    // const {name,heroName} =props
    console.log(props)
    // return <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
    return (
        <div>
        <h1>
            {props.name} a.k.a {props.heroName}
        </h1>
          {props.children}
        </div>
    )

}
export default Greet