import { useState } from "react"

function App(){
  const [nome, setNome] = useState('Ronaldo');

  const Formulario = (props) => {
    return(
      <>
      <h4>Formulario de Inscrição
      </h4>
       <input className="Nome"
       name= "nome"
       placeholder="Digite seu nome"
       onChange={(e)=>props.nome=e.target.value}
         type="text"/>
        <button onClick={()=>{
         (props.texto !=null) ?alert(props.texto) : alert(props.nome)
          }}>
        Clique aqui  
        </button>
        </>
    )
  }
  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <Formulario texto="Oii"/>
      <Formulario texto="Oie"/>
      <Formulario texto="Ola"/>
      <Formulario nome={nome}/> 
      
    </div>
  )
}
export default App