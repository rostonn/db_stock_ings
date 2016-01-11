exports.seed = function(knex, Promise){
  if(true){
    return knex('transactions').del().then(function(){
      return Promise.all([
        knex('transactions').insert({
          symbol_id: 1,
          user_id: 1,
          share_price: 97.50,
          open_datetime: new Date(),
          qty: 50
        }),
        knex('transactions').insert({
          symbol_id: 2,
          user_id: 1,
          share_price: 51.25,
          open_datetime: new Date(),
          qty: 50
        })
      ])
    })
  }
}
