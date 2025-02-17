import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App