import express from 'express';
import CreateProjectController from '../controller/createProject.controller.js';
import ListOfProjectController from '../controller/listOfProject.controller.js';
import BugOfProjectController from '../controller/bugOfProject.contrioller.js';
const createProjectRoute = express.Router();
const createprojectcontroller = new CreateProjectController();
const listofprojectcontroller = new ListOfProjectController();
const bugogprojectcontroller = new BugOfProjectController();

console.log('route is up');
createProjectRoute.get('/create',createprojectcontroller.createProjectPage);
createProjectRoute.get('/list',listofprojectcontroller.getListItmes)
// createProjectRoute.get('/create/back',createprojectcontroller.gethomepage);
createProjectRoute.post('/',createprojectcontroller.createProject);
createProjectRoute.post('/add',listofprojectcontroller.addProjectToList)
createProjectRoute.get('/bug/:id',bugogprojectcontroller.createBugIssuepage);
createProjectRoute.post('/save',bugogprojectcontroller.addissue);
createProjectRoute.get('/issue',bugogprojectcontroller.getallissue);
export default createProjectRoute;