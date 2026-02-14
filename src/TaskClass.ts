export class Task{
    private _id:number;
    private _state:boolean;
    private _title:string;
    private _desc:string;

    public constructor(id:number,state: boolean,title: string,desc:string){
        this._id=id;
        this._state=state;
        this._title=title;
        this._desc=desc;
    }

    public get id():number{
        return this._id;
    }

    public get state():boolean{
        return this._state;
    }

    public get title():string|null{
        return this._title;
    }

    public get desc():string|null{
        return this._desc;
    }

    public set id(id:number){
        if(id<1){
            throw new Error("L'ID doit etre supérieur ou égal à 1")
        }
        this._id=id
    }

    public set state(state:boolean){
        this._state=false;
    }

    public set title(title:string){
        this._title=title;
    }

    public set desc(desc:string){
        this._desc=desc;
    }
}