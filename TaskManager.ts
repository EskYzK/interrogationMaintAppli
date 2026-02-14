import {Task} from "./TaskClass.ts"

export class TaskManager{
    private tasks: Task[]=[]

    public create(ID:number,state:boolean,title:string,desc:string):void{
        const t= new Task(ID,state,title,desc);
        this.tasks.push(t);
    }

    public done(task:Task){
        task.state=true;
    }
    
    public getAll():Task[]{
        return this.tasks;
    }
}

