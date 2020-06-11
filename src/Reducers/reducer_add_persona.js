const initialState = {
    addHeroesPersona:[],
}

export function reducer_add_persona(state = initialState, action){
    switch(action.type){
        case 'ADD_HERO_PERSONA' :
            return{...state, addHeroesPersona:[...state.addHeroesPersona,action.payload]}  
        default:
            return state;    
    }
}