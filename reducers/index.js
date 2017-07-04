import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import orm from '../models';

const rootReducerCombined = combineReducers({ orm: createReducer(orm) });

export default rootReducerCombined;