'use strict';

const data = require('../../data.js');
const jsonQuery = require('json-query')
const apiai = require("apiai");


module.exports = {
  processor:function(parameterscontextout,requestBody)
  {
    parameterscontextout["fire_event"]="groceries_question";
    

    return parameterscontextout; 
  } 
}


