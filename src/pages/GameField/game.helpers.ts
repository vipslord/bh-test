import { GameMatrixType, GameRowType } from "./game.types";

export const getBlackHoles = (
  columns: number,
  rows: number,
  bhCount: number
) => {
  const arr = [];
  const maxNumber = columns * rows;
  while (arr.length < bhCount) {
    const r = Math.floor(Math.random() * maxNumber) + 1;
    if (arr.indexOf(r) === -1 && r !== 0) {
      arr.push(r);
    }
  }
  return arr.reduce((acc, id) => {
    acc[id] = true;
    return acc;
  }, {} as { [id: string]: boolean });
};

const extendWithBlackHolesCount = (matrix: GameMatrixType) => {
  for (let c = 0, colLen = matrix.length; c < colLen; c++) {
    const col = matrix[c];
    for (let r = 0, rowsLen = col.length; r < rowsLen; r++) {
      const row = col[r];
      const all = getSurroundingCells(matrix, c, r);
      row.blackHolesCount = all.reduce(
        (sum, item) => sum + +!!item.blackHole,
        0
      );
    }
  }

  return matrix;
};

const getSurroundingCells = (matrix: GameMatrixType, c: number, r: number) => {
  const col = matrix[c];
  const topCol = matrix?.[c - 1];

  const top = topCol?.[r];
  const topRight = topCol?.[r + 1];
  const topLeft = topCol?.[r - 1];

  const bottomCol = matrix?.[c + 1];
  const bottom = bottomCol?.[r];
  const bottomRight = bottomCol?.[r + 1];
  const bottomLeft = bottomCol?.[r - 1];

  const left = col?.[r - 1];
  const right = col?.[r + 1];
  const all = [
    top,
    topRight,
    right,
    bottomRight,
    bottom,
    bottomLeft,
    left,
    topLeft,
  ].filter(Boolean);
  return all;
};

export const getMatrix = (columns: number, rows: number, bhCount: number) => {
  let id = 0;
  const bhs = getBlackHoles(columns, rows, bhCount);
  const matrix = Array.from({ length: rows }).map(() =>
    Array.from({ length: columns }).map(() => {
      const newId = ++id;
      return {
        blackHole: bhs[newId],
        open: false,
        id: newId,
      } as GameRowType;
    })
  );

  return extendWithBlackHolesCount(matrix);
};

export const getMatrixWithOpenCellOrZeros = (
  matrix: GameMatrixType,
  id: number,
  isBlackHole?: boolean
): GameMatrixType => {
  const columnRows = [] as number[][];

  const updateColumnRowIndex = (id: number) => {
    for (let c = 0, colLen = matrix.length; c < colLen; c++) {
      const col = matrix[c];
      for (let r = 0, rowsLen = col.length; r < rowsLen; r++) {
        const row = col[r];

        if (row.id === id) {
          if (isBlackHole) {
            columnRows.push([c, r]);
            return;
          }
          const isExist = columnRows.some(
            ([col, row]) => col === c && row === r
          );
          if (!isExist) {
            columnRows.push([c, r]);
            if (!row.blackHolesCount) {
              const sides = getSurroundingCells(matrix, c, r).filter(
                (i) => !i.blackHole
              );
              sides.forEach((side) => {
                updateColumnRowIndex(side.id);
              });
            }
          }
          break;
        }
      }
    }
  };

  updateColumnRowIndex(id);

  columnRows.forEach(([col, row]) => {
    matrix[col][row].open = true;
  });

  return [...matrix];
};

export const isBlackHole = (matrix: GameMatrixType, id: number) => {
  for (let c = 0, colLen = matrix.length; c < colLen; c++) {
    const col = matrix[c];
    for (let r = 0, rowsLen = col.length; r < rowsLen; r++) {
      const row = col[r];
      if (row.id === id) {
        return row.blackHole;
      }
    }
  }
};
