import './App.css';
import Hello from './Componentes/Hello';
import Header from './Componentes/NavegationBar.js';
import Aboutme from './Componentes/Aboutme';
import Experience from './Componentes/Experience';
import Skills from './Componentes/Skills';
import Contactme from './Componentes/Contactme'

function App() {
  return (
    <div className="App">
      <div className='App-cnt'>
        <header>
        <Header />
        </header>
        <Hello />
        <Aboutme/>
        <Experience />
        <Skills/>
        <Contactme/>
      </div>
    </div>
  );
}

export default App;
