export type GameFieldProps = {
  setMainMenu: (is: boolean) => void
  blackHoles: number;
  columns: number;
  rows: number;
};

export type GameSetupProps = {
  setColumns: (count: number) => void
  setMainMenu: (is: boolean) => void
  setRows: (count: number) => void
  setBh: (count: number) => void
  columns: number;
  rows: number;
  bh: number;
};

export type GameMatrixType = GameRowType[][];

export type GameRowType = {
  blackHolesCount: number;
  blackHole: boolean;
  open: boolean;
  id: number;
};

export type GameConfigContextType = {
  blackHolesCountVisible: boolean,
  setOpen: (id: number) => void
  blackHolesVisible: boolean,
}
