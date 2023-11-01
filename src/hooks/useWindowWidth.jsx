import {useState,useEffect} from 'react'

function getWindowDimention(){
    const {innerWidth:width,innerHeight : height} = window;
    return {width,height}
}

export default function useWindowWidth (){
    const [windowDimention, setWindowDimention]= useState(getWindowDimention)
    useEffect(() => {
        function handleResize() {
            setWindowDimention(getWindowDimention());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return windowDimention;
    
}