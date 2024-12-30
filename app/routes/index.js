
const express = require('express') ;
const morgan  = require('morgan') ;
const path    = require('path') ;
const bp      = require('body-parser') ;
const cors    = require('cors') ;


const hostname = "localhost" ;
const port     = 3000 ;

const app = express() ;

app.use(morgan('dev')) ;
app.use( bp.json() ) ;
app.use( cors() ) ;


reqquire('./routes/paseadoresRoutes')(app) ;

app.use(express.static(path.join(__dirname, 'public'))) ;

app.use((req, res) => {
 res.setHeader('Content-Type', 'text/html') ;
 res.end('<html><body><h1>Express Server</h1></body></html>') ;

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`) ;
    }) ;            

