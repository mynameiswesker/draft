import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadingHeroes } from '../Actions/loadingHeroes';//action - получает героев
import { getSide } from '../Actions/getSide';//action - получает выбор стороны
import GridHeroes from '../Components/GridHeroes';
import ChoiceSide from '../Components/ChoiceSide';
import WrapperBans from '../Components/WrapperBans';
import H1Comp from '../Components/H1Comp';
import WrapperAdds from '../Components/WrapperAdds';
import HiddenRecomends from '../Components/Recomends';
import InfoPicks from '../Components/InfoPicks';
import data from '../data';

const Home = ({stateHeroes,getArrHeroes,getSideFunc}) => {//достали состояние через {user}

  useEffect(()=>{

    async function fetchData(){
      try{
        getArrHeroes(data);//изменили состояние , получили массив данных героев

      }catch(e){

        console.error(`словили ошибку: ${e}`);

      };
    }

    fetchData();

  },[getArrHeroes]);

  //console.log(stateHeroes);//наше состояние

  let side = stateHeroes.side;

    return (
      <React.Fragment>
          <GridHeroes heroes={stateHeroes} /*сетка героев*/ />
          <ChoiceSide getSide={getSideFunc} /*радиокнопки*/ />
          <H1Comp text='Banned heroes' /*Заголовок забаненных персов*/ />
          <WrapperBans side={side} /*забаненные персонажи*/ />
          <H1Comp text='Picked heroes' /*Заголовок забаненных персов*/ />
          <WrapperAdds />
          <HiddenRecomends />
          <InfoPicks />
      </React.Fragment>
    );
  };

  const mapStateToProps = store => {
    return{
      stateHeroes: store.stateFromReducer1,//состояние 
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      getArrHeroes: arr => dispatch(loadingHeroes(arr)),//получ список героев
      getSideFunc: side=> dispatch(getSide(side)),//получаем значение выбора стороны
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Home);