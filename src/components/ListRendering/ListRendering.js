import React from 'react'
import PersonData from './PersonData';

function ListRendering () {
    //const names = ['vijay', 'patel', 'virali'];

    const persons = [
        {
            id: 1,
            name: 'vijay',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'virali',
            age: 24,
            skill: 'Msc'
        },
        {
            id: 3,
            name: 'patel',
            age: 64,
            skill: 'Bed'
        }
    ];

    const personList = persons.map(person => (
        // <PersonData person={person}></PersonData>
        <PersonData key={person.id} person={person}></PersonData>
    ));


    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[1]}</h2> */}

            {/* {
                names.map((name) => (
                    <h2>{name}</h2>
                ))
            } */}

            {personList}
        </div>
    )
}

export default ListRendering
