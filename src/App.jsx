import './App.css'
import Navbar from "../pages/navbar"
import AllRoutes from '../routes/route'
import Footer from '../pages/footer'
import Grid from '../pages/grid'

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
      <h2 style={{fontSize: "30px",fontWeight: "bold",color: "grey",padding: "30px",}}>SHOP BY CATEGORY</h2>
      <Grid />
      <Footer />
    </>
  )
}

export default App
