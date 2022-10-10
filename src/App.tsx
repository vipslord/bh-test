import GameField from "./pages/GameField";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  const [bh, setBh] = useState(10);
  const [mainMenu, setMainMenu] = useState(true);

  return mainMenu ? (
    <HomePage
      setMainMenu={setMainMenu}
      setColumns={setColumns}
      setRows={setRows}
      setBh={setBh}
      columns={columns}
      rows={rows}
      bh={bh}
    />
  ) : (
    <GameField
      setMainMenu={setMainMenu}
      blackHoles={bh}
      columns={columns}
      rows={rows}
    />
  );
}

export default App;
