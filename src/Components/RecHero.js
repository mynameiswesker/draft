import React from "react";

const RecHero = ({hero,list,stateHeroes}) => {

    let state = stateHeroes.arrHeroes;

    let rendertemplate = (name,arr)=>{
        let history = [];//хранятся все имена
        arr.forEach(element => {
            if(element.nameRecomend === name){
                history.push(element.contred)//запушили имена тех кого контрим и удалили
            }
            return history;
        });
        return history;
    }

    //console.log(rendertemplate(hero.name,list));

    //console.log(stareHeroes);

    let getImgHero = (arrnames,arrHeroes)=> {
        let imgs = [];
        arrnames.forEach(namecontred=>{
            return arrHeroes.forEach(hero=>{
                if(hero.name === namecontred){
                    imgs.push(hero.image)
                }
            })
        })
        return imgs;
    }

    //console.log(getImgHero(rendertemplate(hero.name,list),state));

    return(
        <li>
            <ul className='one_ul'>
                <li className='li_name'>{hero.name}</li>
                <li><img src={`${hero.image}`} alt=''></img></li>
                <li className='wrapp_contred_lis'>{getImgHero(rendertemplate(hero.name,list),state).map((imgk,i)=>{//персы которых контрят
                        return(
                            <img src={imgk} key={i} className='contred' alt=''></img>
                        )
                    })}
                </li>
            </ul>
        </li>
    )
}

export default RecHero;