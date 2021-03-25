import React from 'react'

function PersonData({person}) {
    return (
        <div>
            <h2>
                I am {person.name},
                i am {person.age} old.
                i know {person.skill}
            </h2>
        </div>
    )
}

export default PersonData
