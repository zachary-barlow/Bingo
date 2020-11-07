import React, { useEffect, useState } from 'react';


import TableData from './TableData';

function Board({ user, chosen, socket, room }) {
  const [table, setTable] = useState([]);
  const [bTable, setBTable] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTable(user.board);
    setBTable(user.tfboard);

    
    setDisplay(true);
  }, [user]);

  
  return (
    <div id="user-board">
      {display &&
        <table className='user'>
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
              <TableData user={user} value={table[0][0]} truthy={bTable[0][0]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[1][0]} truthy={bTable[1][0]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[2][0]} truthy={bTable[2][0]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[3][0]} truthy={bTable[3][0]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[4][0]} truthy={bTable[4][0]} chosen={chosen} socket={socket} room={room}/>
            </tr>
            <tr>
              <TableData user={user} value={table[0][1]} truthy={bTable[0][1]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[1][1]} truthy={bTable[1][1]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[2][1]} truthy={bTable[2][1]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[3][1]} truthy={bTable[3][1]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[4][1]} truthy={bTable[4][1]} chosen={chosen} socket={socket} room={room}/>
            </tr>
            <tr>
              <TableData user={user} value={table[0][2]} truthy={bTable[0][2]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[1][2]} truthy={bTable[1][2]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={"FREE"} truthy={bTable[2][2]} />
              <TableData user={user} value={table[3][2]} truthy={bTable[3][2]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[4][2]} truthy={bTable[4][2]} chosen={chosen} socket={socket} room={room}/>
            </tr>
            <tr>
              <TableData user={user} value={table[0][3]} truthy={bTable[0][3]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[1][3]} truthy={bTable[1][3]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[2][3]} truthy={bTable[2][3]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[3][3]} truthy={bTable[3][3]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[4][3]} truthy={bTable[4][3]} chosen={chosen} socket={socket} room={room}/>
            </tr>
            <tr>
              <TableData user={user} value={table[0][4]} truthy={bTable[0][4]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[1][4]} truthy={bTable[1][4]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[2][4]} truthy={bTable[2][4]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[3][4]} truthy={bTable[3][4]} chosen={chosen} socket={socket} room={room}/>
              <TableData user={user} value={table[4][4]} truthy={bTable[4][4]} chosen={chosen} socket={socket} room={room}/>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

export default Board;