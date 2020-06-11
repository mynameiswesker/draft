import React from "react";

const ChoiceSide = ({getSide}) => {

  let handleFunc = (e) => {
    let side = e.target.value;
    getSide(side);
  }

    return (
      <React.Fragment>
          <form className='wrapp_choiceSide'>
              <p>Who's the first ?</p>
              <p><input name='side' type='radio' value='persona' onChange={handleFunc}/> persona</p>
              <p><input name='side' type='radio' value='enemy' onChange={handleFunc}/> enemy</p>
          </form>
      </React.Fragment>
    );
  };
  
  export default ChoiceSide;