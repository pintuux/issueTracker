export default class CreateProjectModel{
    constructor(id,name,desc,author){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.author = author;
    }
    static createProject(name,desc,author){
        const project = new CreateProjectModel(projects.lenght + 1,name,desc,author);
        projects.push(project);
        return projects;
    }
}
let projects = []