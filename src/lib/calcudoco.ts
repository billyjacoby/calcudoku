interface GridItem {
  xPos: number;
  yPos: number;
  value: number | null;
  solution: number | null;
}

interface GridRow {
  rowNumber: number;
  items: GridItem[];
}

interface Grid {
  items: GridItem[];
  rows: GridRow[];
}

export function createGrid(gridSize: number): Grid {
  let gridArrayLength = gridSize * gridSize;
  let gridArray: GridItem[] = [];

  for (let i = 0; i < gridArrayLength; i++) {
    // Get the row and column positions
    let yPos = Math.floor(i / gridSize);
    let xPos = i % gridSize;
    gridArray.push({ xPos, yPos, value: null, solution: null });
  }

  const rows = gridArray.reduce(
    (acc, curr) => {
      if (acc.find((item) => item.rowNumber === curr.yPos)) {
        acc.find((item) => item.rowNumber === curr.yPos)!.items.push(curr);
      } else {
        acc.push({ rowNumber: curr.yPos, items: [curr] });
      }
      return acc;
    },
    [{ rowNumber: 0, items: [] }] as GridRow[]
  );

  return { items: gridArray, rows };
}
