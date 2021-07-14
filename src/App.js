import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0); // primeiro valor igual à zero

  const handleClick = () => {
    setCount(pState => pState + 1); // pState pega o estado anterior
  }

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
