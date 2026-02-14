import {Task} from "./TaskClass.ts"

export class TaskManager{
    private tasks: Task[];
    private boucle:boolean;
    
    constructor(){
        this.tasks=[];
        this.boucle=true;
    }


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

    public App():void{
        console.log("Bienvenue dans votre application de gestion de taches")
        while(this.boucle){
            const ch=prompt("Voulez-vous : (1) Créer une nouvelle tache, (2) Modifier l'état d'une tache, (3) Récupérer la liste de toutes les taches, ou (4) quitter l'application ?")
            switch(ch){
                case "1":{
                    console.log("Création d'une nouvelle tache...")
                    const ID:number=this.tasks.length;
                    const title=prompt("Titre :")
                    const desc=prompt("Description :")
                    this.create(ID,false,title,desc);
                }
                case "2":{
                    console.log("");
                    const list=this.getAll;
                    let j=prompt("Quelle tache voulez-vous (ID) ?")
                    for(let i=0;i<list.length;i++){
                        if(i=j)
                    }
                }
                case "3":{
                    console.log("Voici la liste actuelle des taches :")
                    console.log(this.getAll());
                }
                case "4":{
                    console.log("A bientot !")
                    this.boucle=false;
                }
            }
        }
    }
}
