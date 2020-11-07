export function randomValues() {
  let table = [];
  let tf = [];

  for(let i = 0; i < 5; i++) {
    let row = [];
    let rtf = [];
    let val = 0;
    for(let j = 0; j < 5; j++) {
      if(i === 0) {
        val = Math.floor((Math.random()*15) + 1);
        row.push(check(row, val, 1));
      } else if(i === 1) {
        val = Math.floor((Math.random()*15) + 16);
        row.push(check(row, val, 16));
      } else if(i === 2) {
        val = Math.floor((Math.random()*15) + 31);
        row.push(check(row, val, 31));
      } else if(i === 3) {
        val = Math.floor((Math.random()*15) + 46);
        row.push(check(row, val, 46));
      } else {
        val = Math.floor((Math.random()*15) + 61);
        row.push(check(row, val, 61));
      }
      rtf.push(false);
    }
    table.push(row);
    tf.push(rtf);
  }

  tf[2][2] = true;
  return [table, tf];
}

function check(row, val, plus) {
  while(row.includes(val)) {
    val = Math.floor((Math.random()*15) + plus);
  }
  return val;
}

export function chooseNext() {
  const letters = ["B", "I", "N", "G", "O"];
  const l = Math.floor(Math.random()*4);
  let text = letters[l];

  switch(l) {
    case 0:
      text += Math.floor((Math.random()*15) + 1).toString();
      break;
    case 1:
      text += Math.floor((Math.random()*15) + 16).toString();
      break;
    case 2:
      text += Math.floor((Math.random()*15) + 31).toString();
      break;
    case 3:
      text += Math.floor((Math.random()*15) + 46).toString();
      break;
    case 4:
      text += Math.floor((Math.random()*15) + 61).toString();
      break;
  }
  return [text, l];
}


export function checkBingo(board) {
  /*
  [ [B,I,N,G,O],
    [B,I,N,G,O],
    [B,I,FREE,G,O],
    [B,I,N,G,O],
    [B,I,N,G,O] ]

    all values are true or false
  */

  // horizontal checks
  for(const row in board) {
    if(!row.contains(false)) return true;
  }

  // vertical checks
  for(let i = 0; i < board.length; i++) {
    let col = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i]];
    if(!col.contains(false)) return true;
  }

  // diagonal checks
  let diag1 = [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4]];
  let diag2 = [board[0][4], board[1][3], board[2][2], board[3][1], board[4][0]];
  if(!diag1.contains(false)) return true;
  if(!diag2.contains(false)) return true;


  // corners check
  let out_corners = [board[0][0],board[0][4],board[4][0],board[4][4]];
  let in_corners = [board[1][1],board[1][3],board[3][1],board[3][3]];
  if(!out_corners.contains(false) || !in_corners.contains(false)) return true;

  return false;
}
