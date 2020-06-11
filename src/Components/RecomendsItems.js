import React from "react";
import {connect} from 'react-redux';
import {removeDuplicates} from '../Functions/removeDublicate';
import {get_items} from '../Functions/getItems';

const RecomendsItems = ({statePickEnemy,stateFromReducer1}) => {

  let ArrItems = stateFromReducer1.items;//все итемы и их img

    let heroes = statePickEnemy.addHeroesEnemy;//герои врага

    let allItems = get_items(heroes);//полученные итемы против врага

    let items = removeDuplicates(allItems);//удалили дубликаты итемов

    let styleOn = {
        position:"absolute",
        top:"-2px",
        textAlign:"center",
        width:"100%",
        color:"white",
        fontSize:'0.7rem',
    }

    //console.log(items);

    let getImgItems = (arrnamesItems,bigArrItems)=> {
      let imgs = [];
      arrnamesItems.forEach(nameItem=>{
        return bigArrItems.forEach(objItem=>{
          if(nameItem === objItem.name){
            imgs.push({name:nameItem,img:objItem.img})
          }
        })
      })
      return imgs;
    }

    return(
        <ul>
          {getImgItems(items,ArrItems).map((objItem,id)=>{
              return(
                  <li key={id} style={{position:"relative"}}>
                      <img src={objItem.img} alt=''></img>
                    <div style={styleOn}  
                        >{objItem.name}</div>
                  </li>
              )
          })}
        </ul>
    )
}

const mapStateToProps = store => {
    return{
      statePickEnemy: store.statePickEnemy,//состояние пика врага
      stateFromReducer1: store.stateFromReducer1,//все состояние
    }
  }

  export default connect(
    mapStateToProps,
    )(RecomendsItems);