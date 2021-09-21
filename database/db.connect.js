// const { Knex } = require("knex")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.01",
        host: "root",
        password: "hemant@1234",
        database: "CRUD",
    }
})

knex.schema.createTable("Information",(table) =>{
    table.increments('id')
    table.string("name")
    table.string("lastname")
    table.string("email")
}).then((data) => {
    console.log("Table ctreated");
}).catch((err)=>{
    console.log("table already created");
})

module.exports = knex