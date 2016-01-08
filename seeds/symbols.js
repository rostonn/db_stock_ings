var sp100List = require('../sp100')
var promiseArray = [];



exports.seed = function(knex, Promise) {
  return knex('symbols').del().then(function(){
    for (symbol in sp100List){
      promiseArray.push(knex('symbols').insert({
        symbol: symbol,
        name: sp100List[symbol]
      }))
    };
    return Promise.all(promiseArray);
  });
}
