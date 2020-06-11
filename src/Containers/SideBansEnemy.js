import React,{useEffect} from "react";
import { connect } from "react-redux";
import {readyEnemy} from '../Actions/readyEnemy';
import EmptyDivs from '../Components/EmptyDivs';
import SixBannedPers from '../Components/SixBannedPers';

const SideBansEnemy = ({stateBansEnemy,changeReady,side}) => {
  
  useEffect(()=>{
    if(side === null){
      return
    }
    if(side === 'enemy'){
      changeReady(true);
    }else{
      changeReady(false);
    }
  },[side,changeReady])

  //console.log(stateBansEnemy);//забаненные перс врага

  let bans = stateBansEnemy.banHeroesEnemy;

    return (
      <React.Fragment>
          <div className='bans_enemy'>
          <div><h3 style={{color:'white',textAlign:'center',margin:5}}>Bans for enemy</h3></div>
            <div className='change1' style={{marginBottom:10}}>{ bans.length === 0 ? <EmptyDivs /> : <SixBannedPers bannedHeroes={bans}/>}</div>
          </div>
      </React.Fragment>
    );
  };
  
  const mapStateToProps = store => {
    return{
      stateBansEnemy: store.stateFromReducer3,//состояние 
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      changeReady: bull => dispatch(readyEnemy(bull)),//функция изменения ready  
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SideBansEnemy);