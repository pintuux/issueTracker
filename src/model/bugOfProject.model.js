export default class BugOfProjectModel{
    constructor(id,title,desc,issueType,author){
        this.id = id;
        this.title = title;
        this.desc  = desc;
        this.issueType = issueType;
        this.author = author;
    }
    static addIssue(title,desc,issueType,author){
        
        const issue = new BugOfProjectModel(Issues.length +1,title,desc,issueType,author)
        Issues.push(issue);
    }
    static getAllIssues(){
        return Issues
    }
}
let Issues = [];