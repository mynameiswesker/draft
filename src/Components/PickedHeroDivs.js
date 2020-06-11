import React from "react";

const PickedHeroDivs = ({heroes}) => {

    let arr = [];//массив для хранения забаненных персов

    let emptyarr = [];//массив для хранения компонентов пустых дивов
  
    let EmptyDiv = () => {//компонент с пустым дивовм
      return(
        <div className='empty_div'></div>
      )
    }
  
    let countHeroes = heroes.length;//кол-во персонажей забаненных
  
    arr = heroes.map((hero,id)=>{
      return(
        <div className='empty_div' key={id}>
          <img src={`${hero.image}`} key={id} alt=''></img>
        </div>
      )
    })
  
    if(countHeroes <5){//если забаненных персов меньше 6 , то дозаполнить массиов с персами пустыми дивами 
      for(let i=0; i<5-countHeroes; i++){
        emptyarr.push(<EmptyDiv key={i}/>);
      }
    }
  
    arr.push(emptyarr);
  
      return (
          <>
          {arr}
        </>
      );
    };
  
  export default PickedHeroDivs;