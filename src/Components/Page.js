import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addBanHeroPersona} from '../Actions/addBanHeroPersona';
import {addBanHeroEnemy} from '../Actions/addBanHeroEnemy';
import CrossDiv from '../Components/CrossDiv';
import {addHeroPersona} from '../Actions/addHeroPersona';
import {addHeroEnemy} from '../Actions/addHeroEnemy';
import AddedHeroBackground from '../Components/AddedHeroBackground';

const Page = ({
    hero,//из imgpage вытащили 1 героя
    addBanHeroPersonaFunc,//action добавления персов в бан для персоны
    stateBansHeroPersona,
    stateBansHeroEnemy,
    addBanHeroEnemyFunc,//action добавления персов в бан для врага
    addHeroPersonaFunc,//добавить героя для персоны
    addHeroEnemyFunc,//добавить героя для врага
    statePickPersona,
    statePickEnemy,
}) => {//stateBansHero.ready

    let addedHerosePersonaArr = statePickPersona.addHeroesPersona;//массив пикнутых героев для персоны
    let addedHeroseEnemyArr = statePickEnemy.addHeroesEnemy;//массив пикнутых героев для врага

    //console.log(stateBansHeroPersona.banHeroesPersona.length);

    let getInfoHeroPersona = () => {
        if(stateBansHeroPersona.banHeroesPersona.length<6){
            hero.toggle = true;
            addBanHeroPersonaFunc(hero);//добавили в бан перса для персоны
        }
    }

    let getInfoHeroEnemy = () => {
        if(stateBansHeroEnemy.banHeroesEnemy.length<6){
            hero.toggle = true;
            addBanHeroEnemyFunc(hero);//добавили в бан перса для врага
        }
    }

    let addHeroPersona = () => {//Добавили персонажа для персоны
        if(addedHerosePersonaArr.length<5){
            hero.toggle = true;
            addHeroPersonaFunc(hero);
        }
    }

    let addHeroEnemy = () => {//Добавили персонажа для врага
        if(addedHeroseEnemyArr.length<5){
            hero.toggle = true;
            addHeroEnemyFunc(hero);
        }
   }

    let miss = () => {
        return false;
    }

    let filterSearchAddedHero = (arr,hero) => {
        return arr.filter(addedHero=> addedHero.name === hero.name).length
    }

    return(
        <React.Fragment>
            <div className='wrapp'>
                <div className="wrapp_page" style={{
                    backgroundImage:`url(${hero.image})`,
                    backgroundRepeat:'no-repeat',
                    width:95,
                    height:50,
                    color:'#fff'
                    }}>
                    <span><p>{hero.name}</p></span>
                    <Link to={{
                        pathname:`/info_hero/${hero.name}`,
                        propsSearch:hero
                    }}>About Hero</Link>
                {
                    hero.toggle && filterSearchAddedHero(addedHerosePersonaArr,hero) >0 ? <AddedHeroBackground /> :
                    hero.toggle && filterSearchAddedHero(addedHeroseEnemyArr,hero) >0 ? <AddedHeroBackground /> :
                    hero.toggle ?  <CrossDiv /> : ''
                }
                </div>
                <div className='wrapp_buttons'>
                    <div className='ban' onClick={
                        hero.toggle ? miss :
                        stateBansHeroEnemy.ready ? getInfoHeroEnemy : 
                        stateBansHeroPersona.ready ? getInfoHeroPersona : miss
                    }></div>
                    <div className='pick' onClick={
                        hero.toggle ? miss :
                        stateBansHeroEnemy.ready ? addHeroEnemy : 
                        stateBansHeroPersona.ready ? addHeroPersona : miss
                    }></div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = store => {
    return{
      stateBansHeroPersona: store.stateFromReducer2,//состояние забаненных персонажей персоны
      stateBansHeroEnemy: store.stateFromReducer3,//состояние забаненных персонажей врага
      statePickPersona: store.statePickPersona,//состояние взятых персонажей персоны
      statePickEnemy: store.statePickEnemy,//состояние взятых персонажей врага
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
        addBanHeroPersonaFunc: hero => dispatch(addBanHeroPersona(hero)),//добавили перса для банов персоны
        addBanHeroEnemyFunc: hero => dispatch(addBanHeroEnemy(hero)),//добавили перса для банов врага
        addHeroPersonaFunc: hero => dispatch(addHeroPersona(hero)),//добавили героя для персоны в пик
        addHeroEnemyFunc: hero => dispatch(addHeroEnemy(hero)),//добавили героя для врага в пик
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Page);
