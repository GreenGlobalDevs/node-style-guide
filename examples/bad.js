/**
 * storage.js
 * @ndaidong
*/
'use strict';

import Promise from 'bluebird';

var config = require('../../configs/base');
var MongoClient = require('mongodb').MongoClient;
var url = config.mongodb.url;

function foo(a, b, c){
  if(a==1){
    return a;
  }
  else if(a == 2){
    if(b == 1){
      return 1+c;
    }
    else if(b == 2){
      return c +  a;
    }
    else if(b == 3){
      return a +  b;
    }
  }
  else if(a == 3){
    if(c == 1){
      return a+c;
    }
    else if(c == 2){
      return b +  a;
    }
    else if(c == 3){
      return c +  b;
    }
  }
};

export function bar ( x ) {
  return foo(x, 1, 3)
}

export var collect = (c)=>{
  return new Promise( (resolve, reject) => {
    return MongoClient.connect(url , (err , db) => {
      if(err){
        return  reject(err);
      }
      let col = db.collection( c );
      return resolve(col, db);
    } )
  });
}

export var search = (cond, c) => {
  return new Promise((resolve, reject) => {
    return collect(c).then((col) => {
      return col.find(cond).toArray((err, docs) => {
        if(err){
          return reject(err);
        }
        let arr = []
        if(docs && docs.length>0){
        docs.forEach((item) => {
          arr.push(item);
        });
        }
        return resolve(arr);
      })
      }).catch((e) => {
        return reject(e);
      } )
  });
}
