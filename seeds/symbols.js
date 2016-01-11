var sp100List = require('../sp100')
var promiseArray = [];

exports.seed = function(knex, Promise) {
  if(false){
    return knex('symbols').del().then(function(){
      var idCount = 1;
      for (symbol in sp100List){
        promiseArray.push(knex('symbols').insert({
          id: idCount,
          symbol: symbol,
          name: sp100List[symbol]
        }))
        idCount++;
      };
      return Promise.all(promiseArray);
    });
  }
}
