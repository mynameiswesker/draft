import React,{useState} from "react";
import Information from './Information';
import {connect} from 'react-redux';

const InfoPicks = ({statePickPersona,statePickEnemy}) => {

    let heroesEnemy = statePickEnemy.addHeroesEnemy;
    let heroesPersona = statePickPersona.addHeroesPersona;

    const [toggle,change] = useState(false);

    return (
      <React.Fragment>
          <div 
            className='info_picks' 
            onClick={()=>change(!toggle)}
            style={toggle ? {bottom:0} : {bottom:-325}}
          >
              <h1>Strategy information</h1>
              <ul>
                  <li>
                      <div className='info_persona'>
                          <h3>Persona</h3>
                          <Information heroes={heroesPersona}/>
                      </div>
                  </li>
                  <li>
                      <div className='info_enemy'>
                          <h3>Enemy</h3>
                          <Information heroes={heroesEnemy}/>
                      </div>
                  </li>
              </ul>
          </div>
      </React.Fragment>
    );
  };
  
  const mapStateToProps = store => {
    return{
      statePickPersona: store.statePickPersona,//состояние взятых персонажей персоны
      statePickEnemy: store.statePickEnemy,//состояние взятых персонажей врага
    }
  }
  
  export default connect(
    mapStateToProps,
    )(InfoPicks);