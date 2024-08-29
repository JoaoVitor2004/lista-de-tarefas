import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Test from './pages/Test/Test.jsx'
import Effect from './pages/useEffect/Effect.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Test' element={<Test/>}></Route>
        <Route path='/Effect' element={<Effect/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
