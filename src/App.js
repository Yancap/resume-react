import React from 'react';
import './App.scss';
import { WindowStorage } from './Components/Context/WindowContext';
import { Footer } from './Components/Footer/Footer.js'
import { Loading } from './Components/Loading/Loading';
import { Main } from './Components/Main.js'

function App() {
  const [load, setLoad] = React.useState(true)
  function handleClick(event){
    const target = document.querySelector('[data-tool]')
    if (target) {
      if(!event.target.dataset.tool){
        target.style.display = 'none'
      }
    }
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    }, 5000)
  }, [])
  return (
    <>
    {load ? <Loading /> :
      <div className="App" onClick={handleClick}>
        <WindowStorage>
          <Main />
          <Footer />
        </WindowStorage>
     </div>
    }
    
    
    </>
    
  );
}

export default App;
