const express = require('express');
const app = express();
 const local = require('./local');
// 
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

app.get('/',function(req,res){
  res.send("welcome to our hotel")
})

//import the router files
const porsonRouter = require('./routes/personRoutes');
const menuItemRouter = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', porsonRouter);
app.use('/menu', menuItemRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
