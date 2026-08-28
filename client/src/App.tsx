import { Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import Landing from './pages/Landing'
import Trips from './pages/Trips'

function App() {

  return (
  <Routes>
    <Route element={<MainLayout />}>
    <Route path='/' element={<Landing />}/>
    <Route path='/trips' element={<Trips />}/>
    </Route>
  </Routes>      
  )
}

export default App
