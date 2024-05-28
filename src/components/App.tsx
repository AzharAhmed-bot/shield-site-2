import Home from "./Hero/Home";
import Program from "./Programs/Program";
import AboutUs from "./about/AboutUs";
import { Routes ,Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {

  const routes=[
    {component:<Home/>, path:"/"},
    {component:<Program/>, path:"/programs"},
    {component:<AboutUs/>, path:"/about"},
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
