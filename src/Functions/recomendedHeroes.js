/*ф-ия для поиска контрпика*/
export function recomendedHeroes(allheroes,enemyHeroes){
    let recomendedArr = [];
      for(let i =0; i<enemyHeroes.length; i++){//для каждого героя врага
          for(let j=0; j<allheroes.length; j++){//для каждого героя списка рекомендации
              for(let k=0; k<allheroes[j].contr_pick.length; k++){//для каждого имени героя списка рекомендации
                  let name = allheroes[j].contr_pick[k];//имя кого контрит
                  if(name === enemyHeroes[i].name){
                      recomendedArr = recomendedArr.concat(allheroes[j]);
                  } 
              }
          }
      }
      return recomendedArr;
  }
  /* конец функции поиска контр пика*/