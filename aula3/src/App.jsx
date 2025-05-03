import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      
      {
        [
          {nome:"Pedro", email: "pedro@gmail.com", curso: "Sistemas para internet",media:9},
          {nome:"Alana", email: "alana@gmail.com", curso: "Sistemas para internet",media:6},
          {nome:"Robson", email: "robson@gmail.com", curso: "Sistemas para internet",media:7}
        ].map((aluno)=>
          <Aluno nome= {aluno.nome} email= {aluno.email} curso = {aluno.curso} media= {aluno.media}/>
        )
      }
      
    </div>
  )
}

export default App