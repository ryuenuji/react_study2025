import React from 'react'

const Memberlnfo = ({team, name}) => {
  return (
    <div className='team-info'>
        <p>{team}</p>
        <p>{name}</p>
    </div>
  )
}

export default Memberlnfo