import { Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import Landing from './pages/Landing'

function App() {

  return (
  <Routes>
    <Route element={<MainLayout />}>
    <Route path='/' element={<Landing />}/>
    </Route>
  </Routes>      
  )
}

export default App
