import React from 'react';

import TBDataNon from './TBDataNon';

function Other({ table, bTable }) {

  return (
    <table>
      <thead>
        <tr>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TBDataNon value={table[0][0]} truthy={bTable[0][0]}/>
          <TBDataNon value={table[1][0]} truthy={bTable[1][0]}/>
          <TBDataNon value={table[2][0]} truthy={bTable[2][0]}/>
          <TBDataNon value={table[3][0]} truthy={bTable[3][0]}/>
          <TBDataNon value={table[4][0]} truthy={bTable[4][0]}/>
        </tr>
        <tr>
          <TBDataNon value={table[0][1]} truthy={bTable[0][1]}/>
          <TBDataNon value={table[1][1]} truthy={bTable[1][1]}/>
          <TBDataNon value={table[2][1]} truthy={bTable[2][1]}/>
          <TBDataNon value={table[3][1]} truthy={bTable[3][1]}/>
          <TBDataNon value={table[4][1]} truthy={bTable[4][1]}/>
        </tr>
        <tr>
          <TBDataNon value={table[0][2]} truthy={bTable[0][2]}/>
          <TBDataNon value={table[1][2]} truthy={bTable[1][2]}/>
          <TBDataNon value={"FREE"} truthy={bTable[2][2]}/>
          <TBDataNon value={table[3][2]} truthy={bTable[3][2]}/>
          <TBDataNon value={table[4][2]} truthy={bTable[4][2]}/>
        </tr>
        <tr>
          <TBDataNon value={table[0][3]} truthy={bTable[0][3]}/>
          <TBDataNon value={table[1][3]} truthy={bTable[1][3]}/>
          <TBDataNon value={table[2][3]} truthy={bTable[2][3]}/>
          <TBDataNon value={table[3][3]} truthy={bTable[3][3]}/>
          <TBDataNon value={table[4][3]} truthy={bTable[4][3]}/>
        </tr>
        <tr>
          <TBDataNon value={table[0][4]} truthy={bTable[0][4]}/>
          <TBDataNon value={table[1][4]} truthy={bTable[1][4]}/>
          <TBDataNon value={table[2][4]} truthy={bTable[2][4]}/>
          <TBDataNon value={table[3][4]} truthy={bTable[3][4]}/>
          <TBDataNon value={table[4][4]} truthy={bTable[4][4]}/>
        </tr>
      </tbody>
    </table>
  );
}

export default Other;