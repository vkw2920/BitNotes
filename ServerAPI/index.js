const http = require( 'http' );
const pg = require("pg");

const PORT = process.env.PORT || 5147;
const DB_PORT = process.env.DB_PORT || 5432;
const DB_USERNAME = process.env.DB_USERNAME || 'notes_user';
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678';
const DB_SERVER = process.env.DB_SERVER || 'database';
const DB_DATABASE = process.env.DB_DATABASE || 'notes';

var client = new pg.Client({
    user:DB_USERNAME,
    password:DB_PASSWORD,
    host:DB_SERVER,
    port:DB_PORT,
    database:DB_DATABASE
});

// setTimeout(() => {
//     client.connect()
//         .then(() => console.log("[INFO] Database connected"))
//         .catch((err) => console.log("[ERROR] Can't connect to database:\n" + err));
// }, 5000);

//Users/vk292////

const server = http.createServer(async (req, res) => {
    var url = req.url;
    if (req.method == "GET") {
        if (url.split("?").length < 2 || url.split("?")[1].length <= 0) {
            console.log("[DEBUG] New query (no data transfered)");
            res.end("No data transfered");
            return;
        }
        client.connect()
            .then(() => client.query("select * from users_table;"))
            .then((data) => {
                res.writeHead(200, {'Content-type': 'application/json; charset=utf8'})
                res.end(JSON.stringify(data.rows));
            })
            .catch((err) =>  {
                res.writeHead(200, {'Content-type': 'application/json; charset=utf8'})
                res.end(JSON.stringify(err));
            })
            .then(() => client.end());
    } else {
        res.end("Now only GET requests are supported");
    }
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
