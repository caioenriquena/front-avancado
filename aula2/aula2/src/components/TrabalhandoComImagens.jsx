import React from 'react'
import Praia2 from '../assets/Semtitulo2.jpeg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src='Semtitulo.jpeg' alt='Praia'/><br />
        <img src={Praia2} alt = 'Segunda praia' />
    </div>
  )
}

export default TrabalhandoComImagens