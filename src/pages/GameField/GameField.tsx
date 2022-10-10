import {
  getMatrixWithOpenCellOrZeros,
  isBlackHole,
  getMatrix,
} from "./game.helpers";
import { GameFieldProps, GameMatrixType } from "./game.types";
import { GameConfigContext } from "./AppConfigContext";
import GameOptions from "./GameOptions";
import GameFooter from "./GameFooter";
import { FC, useState } from "react";
import classnames from "classnames";
import Col from "./Col";
import s from "./style.module.sass";

const GameField: FC<GameFieldProps> = ({ setMainMenu, blackHoles, columns, rows }) => {
  const [matrix, setMatrix] = useState(
    getMatrix(columns, rows, blackHoles) as GameMatrixType
  );
  const [blackHolesCountVisible, setBlackHolesCountVisible] = useState(false);
  const [blackHolesVisible, setBlackHolesVisible] = useState(false);
  const [gameActive, setGameActive] = useState(true);

  const setOpen = (id: number) => {
    if (isBlackHole(matrix, id)) {
      setGameActive(false);
      setMatrix(getMatrixWithOpenCellOrZeros(matrix, id, true));
      return;
    }

    setMatrix(getMatrixWithOpenCellOrZeros(matrix, id));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <h3 className={s.title}>
          Game {columns}x{rows}, Black holes: {blackHoles}
        </h3>

        <div className={s.gamePart}>
          <GameConfigContext.Provider
            value={{ blackHolesCountVisible, blackHolesVisible, setOpen }}
          >
            <div className={classnames({ [s.disabled]: !gameActive })}>
              {matrix.map((col, index) => (
                <Col key={index} column={col} />
              ))}
            </div>
          </GameConfigContext.Provider>
          <GameOptions
            setBlackHolesCountVisible={setBlackHolesCountVisible}
            setBlackHolesVisible={setBlackHolesVisible}
            blackHolesCountVisible={blackHolesCountVisible}
            blackHolesVisible={blackHolesVisible}
          />
        </div>

        <GameFooter
          setGameActive={setGameActive}
          setMainMenu={setMainMenu}
          blackHoles={blackHoles}
          gameActive={gameActive}
          setMatrix={setMatrix}
          columns={columns}
          rows={rows}
        />
      </div>
    </div>
  );
};

export default GameField;
