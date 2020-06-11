import React from "react";
import {connect} from 'react-redux';
import {removeDuplicates} from '../Functions/removeDublicate';
import RecHero from '../Components/RecHero';
import {recomendedHeroes} from '../Functions/recomendedHeroes';

const Recomended = ({
    stateHeroes,
    statePickEnemy
}) => {

    let AllHeroesRecomends = stateHeroes.recomends;//Все герои доступные рекомендации
    let EnemyHeroes = statePickEnemy.addHeroesEnemy;//Герои врага    
    let arrayHeroes = recomendedHeroes(AllHeroesRecomends,EnemyHeroes);//функция для сортировки лучших героев против врага по критерию конртпика
    let recomends = removeDuplicates(arrayHeroes);//ф-я удаление дуликатов

  let subContrs = (recomendsArr,enemyArr) => {//
    let empty = [];
    recomendsArr.forEach(recomendsHero=>{
      return recomendsHero.contr_pick.forEach(nameContr=>{
        return enemyArr.forEach(enemyHero=>{
          if(enemyHero.name === nameContr){
            empty.push({
              nameRecomend:recomendsHero.name,
              contred:enemyHero.name
            })
          }
          return empty;
        })
      })
    })
    return empty;
  }

  let qwe = subContrs(recomends,EnemyHeroes);//массив из имен кто контрит и кого конрят

    return (
      <React.Fragment>
          <div className='recomended'>
              <ul className='right_ul'>
                {recomends.map((hero,id)=>{
                    return (
                    <ul key={id}><RecHero hero={hero} key={id} list={qwe} stateHeroes={stateHeroes}/></ul>
                    )
                })}
              </ul>
          </div>
      </React.Fragment>
    );
  };
  
  const mapStateToProps = store => {
    return{
      stateHeroes: store.stateFromReducer1,//состояние сетки героев
      statePickEnemy: store.statePickEnemy,//состояние пика врага
    }
  }

  export default connect(
    mapStateToProps,
    )(Recomended);
