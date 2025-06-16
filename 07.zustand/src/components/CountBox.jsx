import React from 'react'
import useCountStore from '../Stores/useCountStore'

const CountBox = () => {

    const { count } = useCountStore();    
  return (
    <div>
        <h2>CountBox:{count}</h2>
    </div>
  )
}

export default CountBox