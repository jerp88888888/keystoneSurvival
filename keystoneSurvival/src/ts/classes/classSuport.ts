export class GameEventProps{
    gameInfoProps: GameInfoProps = new GameInfoProps();
    gameChoices: GameChoiceProps[] = [];//@ts-expect-error
    gameInfo:Any = null;//@ts-expect-error
    setGameInfo:Any = null;

};

export class GameInfoProps {
    title: string = "";
    img: string = "";
    description: string = "";
};

export class GameChoiceProps {
    option: string = "";
    chanceOfSuccess: number = 100;
    gameInfo:any = null;
    setGameInfo: any = null;
};

export class Option{
    option:string = "";
    successRate:number = 0;
    constructor(option:string, successRate:number){
        this.option = option;
        this.successRate = successRate;
    }
}

export class Event {
    event:string = "";
    prompt:string = "";
    options:Option[] = [];
}

export class GameInfo {
    data:Event[] = [] ;
    event: Event = {event:"",prompt:"",options:[]};
    survival:number = 100;
    level:number = 1;

    constructor (){
        this.data = [];
        this.event = {event:"",prompt:"",options:[]};
        this.survival = 100;
        this.level = 1;
    }

    
}