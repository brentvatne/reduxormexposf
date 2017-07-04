import { AsyncStorage } from 'react-native';
import axios from 'axios';

import {
  JOBS_FETCH_ALL,
  JOBS_FETCH_SUCCESS 
} from './types';

export const testAction => {
  dispatch({type: JOBS_FETCH_ALL, payload: {job: true }});
}