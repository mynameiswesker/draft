const initialState = {
    banHeroesEnemy:[],
    ready:false,
}

export function reducer_ban_enemy(state = initialState, action){
    switch(action.type){
        case 'ADD_BAN_HERO_ENEMY' :
            return{...state, banHeroesEnemy:[...state.banHeroesEnemy,action.payload]}
        case 'READY_ENEMY' :
                return{...state, ready:action.payload}    
        default:
            return state;    
    }
}