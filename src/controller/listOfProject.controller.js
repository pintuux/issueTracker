import { get } from "https";
import ListOfProjectModel from "../model/listOfProject.model.js";
export default class ListOfProjectController{
    getListItmes(req,res,next){
        const project = ListOfProjectModel.getlist();
        
        res.status(200).render('listOfProject',{project})
    }
    addProjectToList(req,res,next){
        const {name,desc,author} = req.body;
        ListOfProjectModel.addProject(name,desc,author);
        const project = ListOfProjectModel.getlist();
        
        res.render('listOfProject',{project})
    }
}