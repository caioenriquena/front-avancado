
import React, { useEffect,useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {
  
  const [dpoLgpds,setDpoLgpd] = useState([])
  useEffect(()=> {
    axios.get("http://localhost:3000/dpolgpd") //request
    .then(response =>setDpoLgpd(response.data)) // response
    .catch(error => console.error ("Error ao carregar a  lista de Lgdp:" , error))
  }, [])

  return (
    <div>
      <h1>DpoLgpd</h1>
      <ul>
        {
            dpoLgpds.map((dpoLgpd)=> (
              <li key = {dpoLgpd.id}> 
                <h2>{dpoLgpd.titulo}</h2>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default DpoLgpd