import React from 'react'

function EstaComSono(props)  {
    const comSono = props.comSono
  return (
    <div>
        {comSono ?<h1>Hora de descansar</h1> : <h1>Bora estudar mais um POUCO!</h1>} 
    </div>
  )
}

export default EstaComSono