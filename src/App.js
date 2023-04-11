import './App.scss';
import { WindowStorage } from './Components/Context/WindowContext';
import { Footer } from './Components/Footer/Footer.js'
import { Main } from './Components/Main.js'

function App() {
  function handleClick(event){
    const target = document.querySelector('[data-tool]')
    if (target) {
      if(!event.target.dataset.tool){
        target.style.display = 'none'
      }
    }
    
  }
  return (
    <div className="App" onClick={handleClick}>
      <WindowStorage>
        <Main />
        <Footer />
      </WindowStorage>

    </div>
  );
}

export default App;
