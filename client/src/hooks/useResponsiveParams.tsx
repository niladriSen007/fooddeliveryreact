import { useEffect, useState } from "react";

export const useResponsiveParams = () => {

  const [width, setWidth] = useState(window.innerWidth);
  
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWidth(window.innerWidth)
    })
    return ()=>{
      window.removeEventListener("resize", ()=>{
        setWidth(window.innerWidth)
      })
    }
  },[])

  return { isMobile, isTablet, isDesktop };
};