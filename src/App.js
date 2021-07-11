import { useState } from 'react';
import './App.css';
import SearchboxComponent from './SearchboxComponent';
import Articles from './Articles';

function App() {
  const [navlink, setNavlink] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className={navlink === 0 ? 'link selected' : 'link'} onClick={() => setNavlink(0)}>Search Box Assignment (Question 1)</div>
        <div className={navlink === 1 ? 'link selected' : 'link'} onClick={() => setNavlink(1)}>Articles Assignment (Question 2)</div>
      </header>

      <main>
        {navlink === 0 ? <SearchboxComponent></SearchboxComponent> : <Articles></Articles>}
      </main>
    </div>
  );
}

export default App;
