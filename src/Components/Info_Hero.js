import React from "react";

const Info_Heroe = (props) => {

  const hero = props.location.propsSearch;

  console.log(hero);
  
    return (
      <React.Fragment>
          <div className='Info_Heroes_Wrapp'>
              <div>
                <ul>
                  <li>
                    <h1>{hero.name}</h1>
                  </li>
                  <li>
                    <img className='Info_heroes_Img' src={`${hero.image}`} alt={hero.name}></img>
                  </li>
                  <li>Head attribute is {hero.head_attribute}</li>
                  <li>Max hp : {hero.hp.max}</li>
                  <li>Min hp : {hero.hp.min}</li>
                  <li>Max armor : {hero.armor.max}</li>
                  <li>Min armor : {hero.armor.min}</li>
                </ul>
              </div>
            </div>
      </React.Fragment>
    );
  };
  
  export default Info_Heroe;