import React from 'react';


function TableData({user, value, truthy, chosen, socket, room}) {
  const handleClick = () => {
    let next = chosen[0];
    if(next.slice(1) === value.toString()) {
      socket.emit('update-game', ({room: room, id: user.id, i: chosen[1], val: value}));
    }
  }

  return (
    <td className="tdhover" onClick={handleClick} style={{backgroundColor: truthy ? '#ED553B' : 'white'}}>{value}</td>
  )
}

export default TableData;