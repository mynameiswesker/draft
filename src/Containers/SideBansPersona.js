import React, {useEffect} from "react";
import { connect } from "react-redux";
import {readyPersona} from '../Actions/readyPersona';
import EmptyDivs from '../Components/EmptyDivs';
import SixBannedPers from '../Components/SixBannedPers';

const SideBansPersona = ({stateBansPersona,changeReady,side}) => {

    useEffect(()=>{
      if(side === null){
        return
      }
      if(side === 'persona'){
        changeReady(true);
      }else{
        changeReady(false);
      }
    },[side,changeReady])

    //console.log(stateBansPersona);//забаненные перс персоны

    let bans = stateBansPersona.banHeroesPersona;

    return (
      <React.Fragment>
          <div className='bans_persona'>
            <div><h3 style={{color:'white',textAlign:'center',margin:5}}>Bans for persona</h3></div>
            <div className='change1' style={{marginBottom:10}}>{ bans.length === 0 ? <EmptyDivs /> : <SixBannedPers bannedHeroes={bans} />}</div>
          </div>
      </React.Fragment>
    );
  };

  const mapStateToProps = store => {
    return{
      stateBansPersona: store.stateFromReducer2,//состояние 
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      changeReady: bull => dispatch(readyPersona(bull)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SideBansPersona);