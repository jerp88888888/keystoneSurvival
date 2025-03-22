export class GameEventProps{
    gameInfoProps: GameInfoProps = new GameInfoProps();
    gameChoices: GameChoiceProps[] = [];

};

export class GameInfoProps {
    title: string = "";
    img: string = "";
    description: string = "";
};

export class GameChoiceProps {
    option: string = "";
    chanceOfSuccess: number = 100;
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