import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1= {4} num2 = {6} />
      <br />
      <Subtracao num1 = {3} num2 ={2} /> 
      <br />
      <Multiplicacao num1 = {4} num2 = {4} />
      <br />
      <Divisao num1 = {4} num2 = {2} />
      <br />
      <h1>
        <PrecisoEstudar nomeDaTecnologia={"SIEM"}/>
      </h1>
    </div>
  )
}

export default App