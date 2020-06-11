import { combineReducers } from 'redux';
import { reducer1 } from './reducer1';
import { reducer_ban_enemy } from './reducer_ban_enemy';
import { reducer_ban_persona } from './reducer_ban_persona';
import {reducer_add_persona} from './reducer_add_persona';
import {reducer_add_enemy} from './reducer_add_enemy';

export const  rootReducer = combineReducers({
    stateFromReducer1: reducer1,
    stateFromReducer2: reducer_ban_persona,
    stateFromReducer3: reducer_ban_enemy,
    statePickPersona: reducer_add_persona,
    statePickEnemy: reducer_add_enemy,
})