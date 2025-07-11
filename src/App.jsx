import { Route , Routes} from "react-router-dom"
import Homepage from './pages/home/homepage'
import Developer from './pages/home/homepage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/developer-info" element={<Developer />} />

    </Routes>
    </>
  )
}

export default App
