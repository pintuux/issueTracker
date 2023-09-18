import BugOfProjectModel from "../model/bugOfProject.model.js";
export default class BugOfProjectController{
    createBugIssuepage(req,res,next){
        res.render('bugofproject');
    }
    addissue(req,res,next){
        // console.log('Bugof project controller',req.body);
        const {title,desc,issueType,author} = req.body;
        BugOfProjectModel.addIssue(title,desc,issueType,author);
       
        res.redirect('/route/issue');
    }
    getallissue(req,res){
        const issues = BugOfProjectModel.getAllIssues();
        res.render('showallissue',{issues});
    }
}