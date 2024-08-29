import { useEffect, useState } from "react"
import Menu from '../Menu/Menu'

export default function Effect() {

    const [value, setValue] = useState('Valor inicial')

    useEffect(() => {
        return console.log('Olá useEffect')
    }, [value])
    
    return(
        <div>
            <Menu/>
            <h1>Use Effect</h1>
            <input style={{padding: 8, }} value={value} type="text" onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}