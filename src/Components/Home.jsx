import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { ReactComponent as Bar } from "../Assests/Icons/Bar.svg"
import { ReactComponent as Cancel } from "../Assests/Icons/BarCancel.svg"
import MainPage from './MainPage';

function useScrollEvent(callback) {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}

export default function Home() {

  const [showSidebar, setShowSidebar] = useState(true);
  const [showButtons,setShowButtons] = useState(false)
  const handleResize = () => {
    let width = window.innerWidth;
    if(width < 1000){
      setShowButtons(true);
      setShowSidebar(false)
    }
    else{
      setShowSidebar(true);
      setShowButtons(false);
    }
    console.log(width);
  };

  useEffect(()=>{
    handleResize();
  },[])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBarClick = () => {
    setShowSidebar(true);
  }

  const handleHideClick = () => {
    setShowSidebar(false);
  }

  

  const handleScroll = () => {
    console.log('Scrolled!');
    // Your scroll logic here
  };

  useScrollEvent(handleScroll);

  return (
    <div className='flex'>
      <Sidebar show={showSidebar} width={showButtons} />
      {
        showButtons && <>
              {
        !showSidebar && <Bar onClick={handleBarClick} className='bg-blue-500 rounded-full p-2 h-[40px] w-[40px] absolute right-[10px] top-[10px] cursor-pointer' />
      }
      {
        showSidebar && <Cancel onClick={handleHideClick} className='bg-blue-500 rounded-full p-2 h-[40px] w-[40px] absolute  right-[10px] top-[10px] cursor-pointer' />
      }
        </>
      }
      <MainPage width={showButtons} />

    </div>
  )
}