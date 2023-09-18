import CreateProjectModel from "../model/createProject.model.js";
export default class CreateProjectController{
    // gethomepage(req,res){
    //     res.render('homepage');
    // }
    createProjectPage(req,res,next){
        res.render('createProjects');
    }
    createProject(req,res,next){
        const {name,desc,author} = req.body;
       const result=  CreateProjectModel.createProject(name,desc,author);
       if(!result){
        return res.status(400).send('Projec not created');
       }
       else{
         res.render('homePage');
       }
    }
}