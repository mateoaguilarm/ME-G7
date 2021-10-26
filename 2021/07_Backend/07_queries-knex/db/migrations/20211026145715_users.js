
exports.up = function (knex) {
    // Crear Tabla
    return knex.schema.createTable('users', function (table) {
        table.increments('user_id').notNullable().unique().primary();
        table.string('email', 50).notNullable().unique();
        table.string('password', 20).notNullable();
    });
};

exports.down = function (knex) {
    // Eliminar Tabla
    return knex.schema.dropTableIfExists('users')
};
