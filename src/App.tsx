import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sorteio } from './pages/Sorteio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sorteio' element={<Sorteio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
