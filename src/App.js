import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';

function App() {

  useEffect(()=>{
    setIsLoaded(true);
  },[])

  const [isLoaded,setIsLoaded] = useState(false);

  return (
    <>
        {
          isLoaded && 
          <Home/>
        }

    </>
    );
}

export default App;
