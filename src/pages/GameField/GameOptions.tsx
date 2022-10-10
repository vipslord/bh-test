import s from "./style.module.sass";

const GameOptions = ({
  setBlackHolesCountVisible,
  setBlackHolesVisible,
  blackHolesCountVisible,
  blackHolesVisible,
}: {
  setBlackHolesCountVisible: (is: boolean) => void;
  setBlackHolesVisible: (is: boolean) => void;
  blackHolesCountVisible: boolean;
  blackHolesVisible: boolean;
}) => {
  return (
    <div className={s.gameOptions}>
      <div className={s.title}>Game options</div>
      <div className={s.title}>
        <input
          type="checkbox"
          onChange={(e) => {
            setBlackHolesVisible(e.target.checked);
          }}
          checked={blackHolesVisible}
        />{" "}
        Location of black holes
      </div>
      <div className={s.title}>
        <input
          type="checkbox"
          onChange={(e) => {
            setBlackHolesCountVisible(e.target.checked);
          }}
          checked={blackHolesCountVisible}
        />{" "}
        Counts of # of adjacent black holes
      </div>
    </div>
  );
};

export default GameOptions;
