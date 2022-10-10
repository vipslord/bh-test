import { GameMatrixType } from "./game.types";
import { getMatrix } from "./game.helpers";
import s from "./style.module.sass";

const GameFooter = ({
  setGameActive,
  setMainMenu,
  setMatrix,
  gameActive,
  blackHoles,
  columns,
  rows,
}: {
  setMatrix: (matrix: GameMatrixType) => void;
  setGameActive: (is: boolean) => void;
  setMainMenu: (is: boolean) => void;
  gameActive: boolean;
  blackHoles: number;
  columns: number;
  rows: number;
}) => {
  return gameActive ? null : (
    <div className={s.buttonsWrapper}>
      <div className={s.buttons}>
        <button
          onClick={() => {
            setMatrix(getMatrix(columns, rows, blackHoles) as GameMatrixType);
            setGameActive(true);
          }}
          className={s.tryAgain}
        >
          TRY AGAIN
        </button>
        <button
          onClick={() => {
            setMainMenu(true);
          }}
        >
          MAIN MENU
        </button>
      </div>
    </div>
  );
};

export default GameFooter;
