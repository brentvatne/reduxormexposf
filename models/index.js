import { ORM } from 'redux-orm';
import Job from './JobModel';  

const orm = new ORM();
orm.register(Job);

export default orm;