export default function UpdateArray(array: any[], removeIndex: number){
    let tmpArray:any[] = [];
    for(let i = 0; i<array.length; i++){
        if(i != removeIndex){
            tmpArray.push(array[i]);
        }
    }
    return tmpArray;
}