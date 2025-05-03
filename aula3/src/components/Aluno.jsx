import React from 'react'

const Aluno = ({nome,email,curso,media}) => {
  
  
  
    return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p><h3>Média:{media}</h3> </p>
        <h3>Status: {media >= 7 ? 'Aprovado!' : 'Reprovado!'}</h3>
        <p>--------------------------</p>
    </div>
  )
}

export default Aluno