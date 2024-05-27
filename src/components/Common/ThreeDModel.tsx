import React, { Suspense } from "react";
import Loader from "./Loader";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface ThreeDModelProp {
  myScene: string;
}

const ThreeDModel = React.memo(({ myScene }: ThreeDModelProp) => {
  return (
    <Suspense fallback={<Loader />}>
      <Spline scene={myScene} />
    </Suspense>
  );
});

export default ThreeDModel;
