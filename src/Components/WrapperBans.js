import React from "react";
import SideBansPersona from '../Containers/SideBansPersona';
import SideBansEnemy from '../Containers/SideBansEnemy';

const WrapperBans = ({side}) => {
    return (
      <React.Fragment>
          <div className='wrapper_bans'>
            <SideBansPersona side={side}/>
            <SideBansEnemy side={side}/>
          </div>
      </React.Fragment>
    );
  };
  
  export default WrapperBans;