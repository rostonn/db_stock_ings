
exports.up = function(knex, Promise) {
  return knex.schema.createTable('symbols', function(table){
    table.increments();
    table.string('symbol');
    table.string('name');
  })
  .then(function(){
    return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('oauthid');
      table.text('profile_image_url');
      table.float('current_cash');
    })
  })
  .then(function(){
    return knex.schema.createTable('balance_history', function(table){
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.date('date');
      table.float('cash_amount');
    })
  })
  .then(function(){
    return knex.schema.createTable('transactions', function(table){
      table.increments();
      table.integer('symbol_id').references('id').inTable('symbols');
      table.integer('user_id').references('id').inTable('users');
      table.float('share_price');
      table.dateTime('open_datetime');
      table.integer('qty');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('transactions')
  .then(function(){
    return knex.schema.dropTableIfExists('balance_history')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('users')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('symbols')
  })
};
