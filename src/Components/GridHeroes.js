import React from "react";
import LineHeroes from '../Components/LineHeroes';

const GridHeroes = ({heroes}) => {

    let Heroes_Strength = [];// слот для хранения персонажей с конкретной характеристикой
    let Heroes_Agility = [];// слот для хранения персонажей с конкретной характеристикой
    let Heroes_Intellect = [];// слот для хранения персонажей с конкретной характеристикой

    let Heroes = heroes.arrHeroes;

    if(Heroes[0]){
        Heroes_Strength =  Heroes.filter(hero=>hero.head_attribute === "strength");//персы с атрибутом strength
        Heroes_Agility =  Heroes.filter(hero=>hero.head_attribute === "agility");//персы с атрибутом agility
        Heroes_Intellect =  Heroes.filter(hero=>hero.head_attribute === "intellect");//персы с атрибутом intellect
    }

    return (
      <React.Fragment>
          <div className='grid_heroes_wrapp'>
            <h1>Grid Heroes</h1>
            <div className='grid_heroes'> 
                <LineHeroes head_attribute='strength' heroes={Heroes_Strength}/>
                <LineHeroes head_attribute='agility' heroes={Heroes_Agility}/>
                <LineHeroes head_attribute='intellect' heroes={Heroes_Intellect}/>
            </div>
          </div>
      </React.Fragment>
    );
  };
  
  export default GridHeroes;