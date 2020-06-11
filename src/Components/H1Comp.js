import React from "react";

const H1Comp = ({text}) => {
    return (
      <React.Fragment>
          <div className='h1_bans'><h1>{text}</h1></div>
      </React.Fragment>
    );
  };
  
  export default H1Comp;