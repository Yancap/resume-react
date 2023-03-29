import './App.scss';
import { WindowStorage } from './Components/Context/WindowContext';
import { Footer } from './Components/Footer/Footer.js'
import { Main } from './Components/Main.js'

function App() {
  return (
    <div className="App">
      <WindowStorage>
        <Main />
        <Footer />
      </WindowStorage>

    </div>
  );
}

export default App;
