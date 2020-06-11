import React from "react";

const SixBanndePers = ({bannedHeroes}) => {
  //console.log(bannedHeroes);

  let arr = [];//массив для хранения забаненных персов

  let emptyarr = [];//массив для хранения компонентов пустых дивов

  let EmptyDiv = () => {//компонент с пустым дивовм
    return(
      <div className='empty_div'></div>
    )
  }

  let countBannedHeroes = bannedHeroes.length;//кол-во персонажей забаненных

  arr = bannedHeroes.map((hero,id)=>{
      return(
        <div className='empty_div' key={id}>
          <img src={`${hero.image}`} key={id} alt=''></img>
          <div className='back'><div>banned</div></div>
        </div>
      )
  })

  if(countBannedHeroes <6){//если забаненных персов меньше 6 , то дозаполнить массиов с персами пустыми дивами 
    for(let i=0; i<6-countBannedHeroes; i++){
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
  
  export default SixBanndePers;