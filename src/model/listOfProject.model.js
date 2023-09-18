export default class ListOfProjectModel{
    constructor(id,name,desc,author){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.author = author;
    }
    static addProject(name,desc,author){
        const project = new ListOfProjectModel(projects.length + 1,name,desc,author)
        // console.log(project);
        projects.push(project)
    }
    static getlist(){
        return projects;
    }
}
let projects = []