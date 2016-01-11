exports.seed = function(knex, Promise){
  if(false){
    return knex('users').del().then(function(){
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Christopher',
          last_name: 'Hutchinson',
          oauthid: '<<<< not valid >>>>',
          current_cash: 10000.00,
          profile_image_url: 'http://somewhere.com/image'
        })
      ])
    })
  }
}
