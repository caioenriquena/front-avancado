import React from 'react'

function EstouConseguindoAprenderReact(props)  {
    
    const estouConseguindo = props.estouConseguindo ;  
   
    return (
    <div>{estouConseguindo ? <h1>Estou indo bem</h1>  : <h1>Preciso estudar Mais</h1>}</div>
  )

}

export default EstouConseguindoAprenderReact