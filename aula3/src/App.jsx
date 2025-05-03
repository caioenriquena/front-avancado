import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      
      {
        [
          {nome:"Pedro", email: "pedro@gmail.com", curso: "Sistemas para internet"},
          {nome:"Alana", email: "alana@gmail.com", curso: "Sistemas para internet"},
          {nome:"Robson", email: "robson@gmail.com", curso: "Sistemas para internet"}
        ].map((aluno)=>
          <Aluno nome= {aluno.nome} email= {aluno.email} curso = {aluno.curso}/>
        )
      }
      
    </div>
  )
}

export default App