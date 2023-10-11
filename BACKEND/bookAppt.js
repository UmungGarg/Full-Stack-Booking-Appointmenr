const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 
// const errorController = require('./controllers/error');

const app = express();
var cors = require('cors');

const userRoutes = require('./routes/user');

app.use(bodyParser.json());
// app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/user', userRoutes);

// app.use(errorController.get404);

sequelize.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => {
    console.log(err);
});
