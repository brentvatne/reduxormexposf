import { fk, many, attr, Model } from 'redux-orm';
import propTypesMixin from 'redux-orm-proptypes';

import {   
  JOBS_FETCH_ALL,
  JOBS_FETCH_FAIL, } from '../actions/jobs/types';

const ValidatingModel = propTypesMixin(Model);

export default class Job extends ValidatingModel {
  static get fields() {
    return {
        id: attr(), 
        name: attr()
    }
  }

  static get modelName() {
    return 'Job';
  }

  static reducer(action, Job, session) {
    switch(action.type){
      case JOBS_FETCH_ALL:
        console.log("you fetched all");
      break; 
    }
  }
}