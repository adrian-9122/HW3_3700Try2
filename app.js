const express = require("express");
const shopController = require('./controllers/shopController');
const mysql = require('mysql2/promise');
const app = express();

app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views/layouts'); // set views
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

const pool = mysql.createPool({
    // host : 'localhost',
    host : '45.55.136.114',
    user : 'F2023_agomez05',
    // database : 'node-complete',
    database : 'F2023_agomez05',
    password: "WingedG00se!"
});

// module.exports = pool.promise();

app.get('/fetch-data', async (req, res) => {
    try {
        const connection = await pool.getConnection();

        // Execute your SQL query here
        const [results, fields] = await connection.execute('SELECT * FROM your_table_name');

        connection.release(); // Release the connection back to the pool

        // Pass the query results to your Pug template
        res.render('your_pug_template', { data: results });
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( shopRoutes);

app.get('*', function(req, res){

    res.render( 'notFound', {title:"Page Not Found",
        subTitle: "Try again",
    });
})

let port = 3009;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);