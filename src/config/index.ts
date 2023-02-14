import merge from 'lodash.merge';


process.env.NODE_ENV = process.env.NODE_ENV || "development"; //use development as default for developers
const stage = process.env.STAGE || 'local';

let stageConfig;

if (stage === 'production') {
    stageConfig = require('./prod').default;  
} else if ( stage === 'testing') {
    stageConfig = require('./testing').default;  
}else {
    stageConfig = require('./local').default;  
}

export default merge({
    stage,
    env : process.env.NODE_ENV,
    port : 3001,
    secrets : {
        jwt : process.env.JWT_SECRET,
        dbUrl : process.env.DATABASE_URL
    }
},stageConfig); //can override from stage config files