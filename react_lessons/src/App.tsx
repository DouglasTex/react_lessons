import "./styles/tictactoe_style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Myapp from "./components/TicTacToe";

function App() {
  return (
    <div>
      <Myapp />
    </div>
  );
}

export default App;
