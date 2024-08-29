import Menu from '../Menu/Menu'
import './Test.css'
import { useState } from 'react'
import { useRef } from 'react'
import { v4 } from 'uuid'

export default function Test() {

    const [text, setText] = useState('Result')
    const inputRef = useRef()

    const [count, setCount] = useState(0)

    const [array, setArray] = useState([])

    function adicionarTecnologia() {
        if (!inputRef.current.value) {
            alert('[Erro] digite algo')
        } else {
            setArray([ {name: inputRef.current.value, id: v4()}, ...array])
        }
    }

    function removeTec(linguagem) {
        setArray(array.filter(tec => tec.id !== linguagem))
    }

    function addText() {
        inputRef.current.value === '' ? text : setText(inputRef.current.value)
    }

    return(
        <div>
            <Menu/>
            <h1>{text}</h1>
            <input className='int-text' type="text" onInput={addText} ref={inputRef} placeholder='Add text'/>
            <button className='btn-contar' onClick={(() => setCount(count + 1))}>Count {count}</button>
            <button onClick={adicionarTecnologia}>Adicionar</button>

            {
                array.map((arr) => {
                    return(
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}} 
                        key={arr.id} className='container'>
                            <div>{arr.name}</div>
                            <button onClick={(() => removeTec(arr.id))}>Remove</button>
                        </div>
                    )
                })
            }

        </div>
    )
}