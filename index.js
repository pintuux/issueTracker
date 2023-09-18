//import express module, by the help of express we will create express server
import express from 'express';
import path from 'path';
import expressLayouts from "express-ejs-layouts";
import bodyParser from 'body-parser';
import createProjectRoute from './src/route/createProject.route.js';
const app = express();
//setting view engine to use UI 

app.set('view engine','ejs');
app.set("views", path.join(path.resolve(),"forntend", "views"));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('forntend'));
app.use('/route',createProjectRoute)
app.get('/',(req,res)=>{
    res.status(200).render("homePage");
})

app.listen(3000,()=>{
    console.log('server is listening on port:',3000);
});