import React from "react";
import SidePicksPersona from '../Containers/SidePicksPersona';
import SidePicksEnemy from '../Containers/SidePicksEnemy';

const WrapperAdds = () => {
    return (
      <React.Fragment>
          <div className='wrapper_bans'>
            <SidePicksPersona />
            <SidePicksEnemy />
          </div>
      </React.Fragment>
    );
  };
  
  export default WrapperAdds;