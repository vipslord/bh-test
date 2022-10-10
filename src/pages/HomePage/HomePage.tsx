import { GameSetupProps } from "../GameField/game.types";
import { FC } from "react";
import s from "./style.module.sass";

const HomePage: FC<GameSetupProps> = ({
  setMainMenu,
  setColumns,
  setRows,
  setBh,
  columns,
  rows,
  bh,
}) => {
  return (
    <div className={s.wrapper}>
      <div>
        <h3 className={s.title}>MY Proxx</h3>
        <div>
          <div className={s.title}>
            <input
              type="number"
              onChange={(e) => setColumns(+e.target.value)}
              value={columns}
              max={30}
            />{" "}
            Columns
          </div>
          <div className={s.title}>
            <input
              type="number"
              onChange={(e) => setRows(+e.target.value)}
              value={rows}
              max={30}
            />{" "}
            Rows
          </div>
          <div className={s.title}>
            <input
              type="number"
              onChange={(e) => setBh(+e.target.value)}
              value={bh}
              max={30}
            />{" "}
            Black holes
          </div>
          <button
            className={s.button}
            onClick={() => {
              setMainMenu(false);
            }}
          >
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
