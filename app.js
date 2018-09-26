/* Require useful modules */
const app = require('express')();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');


/* Use session middleware */
app.use(cookieSession({ secret: 'secretkey' }));


/* Create application/x-www-form-urlencoded parser */
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => res.render('index.pug'));


app.listen(8080, () => console.log(`App listening on port 8080!`));
