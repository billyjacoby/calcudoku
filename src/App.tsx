import React from 'react';
import styled from 'styled-components';

import { createGrid } from './lib/calcudoco';

export function App() {
  const grid = createGrid(4);
  console.log('grid', grid);
  return (
    <OuterContainer className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <InnerContainer>
        <GridContainer>
          {grid.rows.map((gridItem, index) => (
            <GridRow key={index}>
              {gridItem.items.map((item, index) => (
                <Square key={index} />
              ))}
            </GridRow>
          ))}
        </GridContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

const GridContainer = styled.div``;

const GridRow = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: solid 3px blue;
`;
