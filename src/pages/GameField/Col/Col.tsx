import { GameRowType } from "../game.types";
import SingleCell from "./SingleCell/SingleCell";
import s from "./style.module.sass";

const Col = ({ column }: { column: GameRowType[] }) => {
  return (
    <div className={s.col}>
      {column.map((row) => <SingleCell row={row} key={row.id} />)}
    </div>
  );
};

export default Col;
