import React from "react";
import { connect } from "react-redux";
import EmptyFiveDivs from '../Components/EmptyFiveDivs';
import PickedHeroDivs from '../Components/PickedHeroDivs';

const SidePicksEnemy = ({statePickEnemy}) => {

    //console.log(statePickEnemy);

    let heroes = statePickEnemy.addHeroesEnemy;

    return (
      <React.Fragment>
          <div className='SidePicks'>
            <div style={{color:'white',textAlign:'center',margin:5}}><h3>Pick for enemy</h3></div>
            <div className='change2'>{heroes.length === 0 ? <EmptyFiveDivs /> : <PickedHeroDivs heroes={heroes}/>}</div>
          </div>
      </React.Fragment>
    );
  };
  
  const mapStateToProps = store => {
    return{
        statePickEnemy: store.statePickEnemy,//состояние 
    }
  }
  
  export default connect(
    mapStateToProps,
    )(SidePicksEnemy);