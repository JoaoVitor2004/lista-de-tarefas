import { useState, useRef } from 'react'
import { v4 } from 'uuid'
import './Home.css'

function App() {

  const [tarefas, setTarefa] = useState([])
  const inputRef = useRef()

  function adicionarTarefa() {
    if (!inputRef.current.value) {
      alert('Digite uma tarefa primeiro')
    } else {
      setTarefa([{ id: v4(), nome: inputRef.current.value }, ...tarefas])
      inputRef.current.value = ''
      console.log(tarefas)
    }
  }

  function removerTarefa(id) {
    setTarefa(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (

    <div className='App'>
      <h1>Todo list</h1>
      <input className='input-tarefa' type="text" ref={inputRef} placeholder='Digite uma tarefa' />
      <button onClick={adicionarTarefa}>Adicionar</button>

      {
        tarefas.map((element) => {
          return (
            <div className='container-resultado' key={element.id}>
              <span>{element.nome}</span>
              <button onClick={() => removerTarefa(element.id)}>Remover</button>
            </div>
          )
        })
      }
    </div>

  )
}

export default App
