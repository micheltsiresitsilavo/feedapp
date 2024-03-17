import { useEffect, useState } from "react";

useEffect;

const ScreenMeasure = () => {
  const [widthScreen, setWidthScreen] = useState(0);
  const [heightScreen, setHeightScreen] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      let wSizeWin = window.innerWidth;
      let hSizeWin = window.innerHeight;
      setWidthScreen(wSizeWin);
      setHeightScreen(hSizeWin);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="">
      <p className="text-lime-500 font-thin text-3xl px-4 py-6 ">
        My Screen Size
      </p>
      <div className="h-screen flex justify-center items-center">
        <p className="md:text-[calc(100vh/3)] sm:text-[calc(100vh/4)] text-[calc(100vh/8)] xl:text-[calc(100vh/2)] text-lime-500 font-thin">
          {widthScreen}x{heightScreen}
        </p>
      </div>
    </div>
  );
};

export default ScreenMeasure;
