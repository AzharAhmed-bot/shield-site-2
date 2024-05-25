import Spline from "@splinetool/react-spline";

interface SplineProp{
    sceneType:string
}


export default function ThreeD({sceneType}:SplineProp){

    return(
        <div>
            <Spline scene={sceneType}/>
        </div>
    )

}