import React, { useEffect, useState } from 'react';

import OtherUsers from './boards/OtherUsers';
import Board from './boards/Board';



function Room({ users, name, room, socket, chosen }) {
  const [display, setDisplay] = useState(false);
  const [mainUser, setMainUser] = useState([]);


  useEffect(() => {
    let main = users.filter(u => u.name === name);
    setMainUser(main);
    
    setDisplay(true);
  },[users, name]);

  return (
    <div className="game-screen">
      {display && 
        <Board user={mainUser[0]} chosen={chosen} socket={socket} room={room}/>
      }
      {users.length > 1 && display &&
        <OtherUsers users={users.filter(u => u.id !== mainUser[0].id)} />
      }
    </div>
  );
}

export default Room;