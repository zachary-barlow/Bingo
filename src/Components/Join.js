import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './css/join.css';


function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div className="join">
        <h1>Join A Game</h1>
        <div className="inputs">
          <input type="text" className="createInput" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" className="createInput" placeholder="Room" onChange={(e) => setRoom(e.target.value)}/>
        </div>
        <div className="btn">
          <Link onClick={event => (!name || !room) ? event.preventDefault(): null} to={{pathname:"/lobby", name: name, room: room}}>
            <button className="btn41-43 btn-41 w-100" type="submit">Join</button>
          </Link>
        </div>

        <div className="rules">
          <h3>How to Play:</h3>
          <ul>
            <li>Input your username and room name into the input fields than join the room</li>
            <li>Wait until everyone joins than 1 person can click start game</li>
            <li>If anything breaks just come back to home screen and create a new room</li>
            <li><strong>Does not work on mobile right now</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Join;