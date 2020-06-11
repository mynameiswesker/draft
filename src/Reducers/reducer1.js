const initialState = {
    arrHeroes:[],
    recomends:[],
    side:null,
}

export function reducer1(state = initialState, action){
    switch(action.type){
        case 'GET_ARR_HEROES' :
            return{...state, arrHeroes:action.payload.heroes, items:action.payload.items}
        case 'GET_SIDE' :
            return{...state, side:action.payload}
        case 'ADD_ARRAY' :
            return{...state, recomends:action.payload}    
        default:
            return state;    
    }
}