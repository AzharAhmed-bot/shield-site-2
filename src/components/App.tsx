import Home from "./Home"
import { Routes ,Route} from "react-router-dom";
import Spline from "@splinetool/react-spline";
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
    <div>
      <h1>Hello</h1>
      <Spline scene="https://my.spline.design/lightningbulb-70fff288e78726d13bbf9092ab84bce0/"></Spline>
    </div>
    </>
  )
}

export default App;
