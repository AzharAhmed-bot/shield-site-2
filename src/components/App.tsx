import Home from "./Home"
import { Routes ,Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {

  const routes=[
    {component:<Home/>, path:"/"},
  ];




  return (
    <>
    <Navbar/>
    <Routes>
      {routes.map((route)=>{
        return <Route path={route.path} element={route.component} />
      })}
    </Routes>

    </>
  )
}

export default App;
