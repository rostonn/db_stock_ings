exports.seed = function(knex, Promise){
  if(false){
    return knex('balance_history').del().then(function(){
      return Promise.all([
        knex('balance_history').insert({
          user_id: 1,
          date: new Date().toLocaleDateString(),
          cash_amount: Math.random()*15000
        }),
        knex('balance_history').insert({
          user_id: 1,
          date: new Date('2016/01/10'),
          cash_amount: Math.random()*15000
        }),
        knex('balance_history').insert({
          user_id: 1,
          date: new Date('2016/01/05'),
          cash_amount: Math.random()*15000
        }),
        knex('balance_history').insert({
          user_id: 1,
          date: new Date('2015/12/28'),
          cash_amount: Math.random()*15000
        })
      ])
    })
  }
}
