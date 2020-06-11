import React from "react";

const Information = ({heroes}) => {

    let control_duration = (arr)=> {
        let control = 0;
        arr.forEach(hero=>{
            if(hero.have_control){
                control++;
            }
        })
        return control
    }

    let pure_dmg = (arr)=> {
        let pure = 0;
        if(arr.length === 0) return 0;
        arr.forEach(hero=>{
            if(hero.type_dmg_skills.includes('pure')){
                pure++;
            }
        })
        return pure
    }

    let stage = (arr)=> {
        let early = 0;
        let middle = 0;
        let late = 0;
        let count = 0;
        if(arr.length === 0) return 0;
        arr.forEach(hero=>{
            early += hero.early_game;
            middle += hero.mid_game;
            late += hero.late_game;
            count++;
        })
        return {
            'early':Math.floor(early/count * 100) / 100,
            'middle':Math.floor(middle/count * 100) / 100,
            'late':Math.floor(late/count * 100) / 100,
        }
    }

    let dmg_procast = (arr)=> {
        let procast = 0;
        if(arr.length === 0) return 0;
        arr.forEach(hero=>{
            procast+= (hero.dmg_procast.min+hero.dmg_procast.max)
        })
        return procast
    }

    return (
      <React.Fragment>
          <div>
              <ul>
                <li>Количество персонажей, имеющих контроль: <span className='info_span'>{control_duration(heroes)}</span></li>
                  <li>Количество персонажей с чистым уроном: <span className='info_span'>{pure_dmg(heroes)}</span></li>
                  <li>Показатель силы в early game: <span className='info_span'>{stage(heroes).early ? stage(heroes).early : 0}/6</span></li>
                  <li>Показатель силы в mid game: <span className='info_span'>{stage(heroes).middle ? stage(heroes).middle : 0}/6</span></li>
                  <li>Показатель силы в late game: <span className='info_span'>{stage(heroes).late ? stage(heroes).late : 0}/6</span></li>
                <li>Средний дмг с прокаста команды: <span className='info_span'>{dmg_procast(heroes)}</span></li>
              </ul>
          </div>
      </React.Fragment>
    );
  };
  
  export default Information;
  