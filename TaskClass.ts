export class Task{
    private _id:number;
    protected _state:boolean;
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

    public get title():string{
        return this._title;
    }

    public get desc():string{
        return this._desc;
    }

    public set id(id:number){
        this._id=id
    }

    public set state(state:boolean){
        this._state=state;
    }

    public set title(title:string){
        this._title=title;
    }

    public set desc(desc:string){
        this._desc=desc;
    }
}