import { useGameConfigContext } from "../../AppConfigContext";
import { GameRowType } from "../../game.types";
import classnames from "classnames";
import s from "./style.module.sass";

const SingleCell = ({ row }: { row: GameRowType }) => {
  const { blackHolesCountVisible, blackHolesVisible, setOpen } =
    useGameConfigContext();

  return (
    <button
      onClick={() => setOpen(row.id)}
      className={s.singleCell}
      disabled={row.open}
    >
      <span
        className={classnames(s.blackHoleHidden, {
          [s.blackHole]: row.blackHole && row.open,
          [s.blackHoleTest]: row.blackHole && blackHolesVisible,
        })}
      >
        <span
          className={classnames(s.countHidden, {
            [s.count]: row.open,
            [s.countTest]: !row.blackHole && blackHolesCountVisible,
          })}
        >
          {row.blackHolesCount}
        </span>
      </span>
    </button>
  );
};

export default SingleCell;
