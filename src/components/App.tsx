import Home from "./Hero/Home";
import Program from "./Programs/Program";
import { Routes ,Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {

  const routes=[
    {component:<Home/>, path:"/"},
    {component:<Program/>, path:"/programs"},
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
