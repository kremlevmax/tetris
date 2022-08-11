import "./App.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className='App'>
      <Game rows={20} columns={40} />
    </div>
  );
}

export default App;
