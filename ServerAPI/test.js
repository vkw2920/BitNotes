const pg = require("pg");

var client = new pg.Client({user:'notes_user', password:'15tAi5W2', host:'localhost', port:5432, database:'notes'});

client.connect()
    .then(() => console.log("Connected!!!!"))
    .then(() => client.query("select * from users_table;"))
    .then((data) => console.log(data.rows[0].username))
    .catch((err) => console.log(err));






