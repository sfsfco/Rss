require('dotenv').config();
const express = require('express');
const app = express();

app.set('port',process.env.MYPORT || 3000);
app.use(express.json());


const routes = require('./routes');
app.use('/api', routes);

app.get('/',(req, res) => {
    res.send('Hello World');
});


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
