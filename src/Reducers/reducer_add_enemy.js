const initialState = {
    addHeroesEnemy:[],
}

export function reducer_add_enemy(state = initialState, action){
    switch(action.type){
        case 'ADD_HERO_ENEMY' :
            return{...state, addHeroesEnemy:[...state.addHeroesEnemy,action.payload]} 
        default:
            return state;    
    }
}