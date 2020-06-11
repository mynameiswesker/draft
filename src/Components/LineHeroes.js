import React from "react";
import ImgHero from './ImgHero';

const LineHeroes = (props) => {

  const { head_attribute, heroes } = props;

  if(!heroes[0]){
    return(
      <div>...Loading</div>
    )
  }else{

    return (
      <React.Fragment>
        <div className='greed_line_heroes'>
          <div className='head_attribute'>{head_attribute}</div>
          <div className='container_imgs'>
          <ImgHero heroes={heroes}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
  };
  
  export default LineHeroes;