import React from 'react';
import { motion } from 'framer-motion';

import Other from './OtherBoard';

function OtherUsers({ users }) {
  return (
    <div id="other-boards">        
        {users.map((u, key) => {
          return (
          <motion.div className="tab" key={key}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 1.5}}
          >
            <h4>User: {u.name}</h4>
            <Other table={u.board} bTable={u.tfboard} />
           </motion.div>
          )
        })}
    </div>
  );
}

export default OtherUsers;