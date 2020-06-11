import React, {useEffect,useState} from "react";
import {connect} from 'react-redux';
import WrappRecomends from '../Components/WrappRecomends';
import {successRecomends} from '../Actions/successRecomends';

let difference = (big,small) => {//ф-ия для фильтрации и отсева повторяющихся персонажей
  for(let i=0; i<small.length; i++){
    big = big.filter(elem=>elem.id !== small[i].id)
  }
  return big;
}

const HiddenRecomends = ({
    stateHeroes,
    stateBansPersona,
    stateBansEnemy,
    statePickPersona,
    statePickEnemy,
    successRecomendsFunc
}) => {

    const [toggle, changeToggle] = useState(false);//кнопа показать/скрыть левое меню рекомендаций

    let picksPersona = statePickPersona.addHeroesPersona;//массив героев пика персоны
    let picksEnemy = statePickEnemy.addHeroesEnemy;//массив героев пика врага
    
    let bansPersona = stateBansPersona.banHeroesPersona;//массив героев бана персоны 
    let bansEnemy = stateBansEnemy.banHeroesEnemy;//массив героев бана врага

    let heroes = stateHeroes.arrHeroes;//массив всех герои сетки 

    /*Создаем массив персонажей без банов и пиков - остаток для рекомендаций*/

    let rabish = [];

    rabish = rabish.concat(picksPersona,picksEnemy,bansPersona,bansEnemy);
  
    let over = difference(heroes,rabish);//список доступных героев для рекомендаций

    /* Конец создания массива */

    useEffect(()=>{
      if(over.length>0){
        successRecomendsFunc(over)//закинули список для рекомендаций в стор основной reducer1
      }
    },[over.length,successRecomendsFunc]);

    //console.log(stateHeroes);

    return (
      <React.Fragment>
        <div 
          className='hiden_recomends' 
          style={toggle ? {width:300} : {width:0,borderLeft:0}}
        >
           <div 
              className='recomends'
              onClick={()=>changeToggle(!toggle)}
           >
           <WrappRecomends />
             <div 
                className='butt' 
                onClick={()=>changeToggle(!toggle)}
              >
                Recomends
              </div>
           </div>
        </div>
      </React.Fragment>
    );
  };

  const mapStateToProps = store => {
    return{
      stateHeroes: store.stateFromReducer1,//состояние сетки героев
      stateBansPersona: store.stateFromReducer2,//состояние забаненных пeрсов персоны
      stateBansEnemy: store.stateFromReducer3,//состояние забаненных пeрсов врага
      statePickPersona: store.statePickPersona,//состояние пика персоны
      statePickEnemy: store.statePickEnemy,//состояние пика врага
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      successRecomendsFunc: array => dispatch(successRecomends(array)),//загрузили список для рекомендаций
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(HiddenRecomends);
  
