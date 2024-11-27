import Authentication from './Pages/Authentication/index'
import './App.css'
import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes >
      <Route path='/' element={<> <Authentication /></>} />
    </Routes>
     
    </>
  )
}

export default App
