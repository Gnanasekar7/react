import React from 'react'
import Person from './Person'

function PersonList() {
    const person=[
        {
        name: 'Gnana',
        age: 23,
        skills: 'React js'
    },
    {
        name: 'Sekar',
        age: 22,
        skills: 'Angular'
    }
]
const PersonList=person.map(person=> < Person person={person}/> )

  return (
    <div>
        {PersonList}
    </div>
  )
}

export default PersonList