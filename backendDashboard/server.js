const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
//const userRoute=require('./routes/user');
const DepenseRoute=require('./routes/depense');
const RevenuRoute=require('./routes/revenu');
const BudgetRoute=require('./routes/budget');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use('/user', userRoute);
app.use('/depense', DepenseRoute);
app.use('/revenu', RevenuRoute);
app.use('/budget', BudgetRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});