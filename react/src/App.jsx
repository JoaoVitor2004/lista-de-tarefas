import { useState } from 'react'
import { useRef } from 'react'
import { v4 } from 'uuid'
import './App.css'

function App() {

  const inputRef = useRef()
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa() {
    if (inputRef.current.value === '') {
      alert('Digite uma tarefa')
    } else {
      setTarefas([ {id: v4(), nome: inputRef.current.value} , ...tarefas])
      inputRef.current.value = ''
    }
  }

  function deletarTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <div className='App'>
      <h1>Lista de tarefas</h1>
      <input className='input-tarefa' type="text" placeholder='Digite uma tarefa' ref={inputRef}/>
      <button className='btn-tarefa' onClick={adicionarTarefa}>Adicionar</button>

      {
        tarefas.map((tarefa) => {
          return(
            <div key={tarefa.id} className='container-resultado'>
              <div>{tarefa.nome}</div>
              <button onClick={() => deletarTarefa(tarefa.id)}>Remover</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
