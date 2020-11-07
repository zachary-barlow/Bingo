import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import { motion } from 'framer-motion';
import Select from 'react-select';

import Room from './Room';
import Board from './boards/Board';

let socket;


const options = [
  {value: 'button', label: 'Button'},
  {value: 'timer', label: 'Timer'}
]

const Lobby = (props) => {
  const [nameU, setNameU] = useState('');
  const [room, setRoom] = useState('');
  const [user, setUser] = useState(null);
  const [winner, setWinner] = useState(null);
  const [users, setUsers] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState(10);
  const [vals, setVals] = useState([]);
  const [option, setOption] = useState({value: 'button', label: 'Button'});


  const ENDPOINT = "https://bingo-react-game.herokuapp.com/";
  // const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const {name, room} = props.location;
    socket = io(ENDPOINT);

    setNameU(name);
    setRoom(room);

    socket.emit('join', {name, room}, () => {
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
    
  },[ENDPOINT, props.location]);

  useEffect(() => {
    const {name, room} = props.location;
    socket.on("users", (user_arrays) => {
      setUsers(user_arrays.users);
    });

    socket.on("users-update", (user_arrays) => {
      setUsers(user_arrays.users);
    });

    socket.on("start-game", ({user, usersRoom, roomname, next}) => {
      setNameU(name);
      setUsers(usersRoom);
      setUser(user);
      setRoom(roomname);
      setChosen(next);
      setVals([...vals, next]);

      setGameFinished(false);
      setGameStarted(true);
    });

    socket.on('timer', (time) => {
      setTimer(time);
    });

    socket.on('next', ({c, vals}) => {
      setChosen(c);
      setVals(vals);
    });

    socket.on('bingo', ({room, user}) => {
      socket.emit('game', {room: room, data: 'end', user: user, option: option});
    });
    
    socket.on('end-game', ({user, users}) => {
      setWinner(user);
      setUsers(users);
      setGameStarted(false);
      setGameFinished(true);
      setVals([]);
    });

    socket.on('user-left', (users) => {
      setUsers(users);
    });
  }, [props.location]);

  const handleClick = () => {
    socket.emit('game', {room: room, data: 'start', user: '', option: option, vals: []});
  }

  const handleNext = () => {
    socket.emit('game', {room: room, data: 'next', user: user, option: option, vals: vals});
  }

  
  if(gameStarted) {
    let d;
    if(option.value === 'button') {
      d = <button onClick={() => handleNext()} className="game-btn btn41-43 btn-41">Next</button>;
    } else {
      d = timer;
    }
    return (
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <div className="game-header">
          <div className="game-item"><span>User:</span> {nameU}</div>
          <div className="game-item chosen">
            <span>{chosen[0]}:</span> 
            
            {d}
            
          </div>
        </div>

        <Room users={users} name={nameU} room={room} socket={socket} chosen={chosen}/>
      </motion.div>
    );
  } else if (gameFinished) {
    return (
      <motion.div transition={{ ease: "easeOut", duration: 2 }} className="end-header">
        <h1 className="game-item winner">WINNER: {winner.name}</h1>
        <button className="game-item btn41-43 btn-41" type="submit" onClick={() => setGameFinished(false)}>Lobby</button>
        <Board user={winner} chosen={''} socket={socket} room={room}/>
      </motion.div>
    );
  } else {
    return (
      <motion.div transition={{ ease: "easeOut", duration: 2 }} id="home-screen">
        <div className="lobby-header">
          <h1>Lobby: {room}</h1>

          {/* <Link to={{pathname: "/room", users: users, name: name, room: room, socket: socket}}> */}
            <button className="btn41-43 btn-41" id="mL" type="submit" onClick={handleClick}>Start</button>
          {/* </Link> */}
          
        </div>
        <div>
          <Select options={options} onChange={setOption} className="select" placeholder="Select Game Method"/>
        </div>

        <div className="people">
          {users.map((u, key) => {
            return <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="person" key={key}>
              <p>{u.name}</p>
              {/* <p>Wins: {u.wins}</p> */}
            </motion.div>
          })}
        </div>
      </motion.div >

    );
  }
  
}

export default Lobby;