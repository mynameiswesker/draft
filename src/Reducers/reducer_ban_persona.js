const initialState = {
    banHeroesPersona:[],
    ready:false,
}

export function reducer_ban_persona(state = initialState, action){
    switch(action.type){
        case 'ADD_BAN_HERO_PERSONA' :
            return{
                ...state, banHeroesPersona:[...state.banHeroesPersona,action.payload]
            }
        case 'READY_PERSONA' :
            return{...state, ready:action.payload}
        default:
            return state;    
    }
}