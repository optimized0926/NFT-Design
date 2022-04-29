import Home from './components/Home'
import Beyond from './components/Beyond'
import Mindmap from './components/Mindmap'
import Bags from './components/Bags'
import Teams from './components/Teams'
import Faq from './components/Faq'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Beyond />
        <Mindmap />
        <Bags />
        <Teams />
        <Faq />
      </header>
    </div>
  );
}

export default App;
