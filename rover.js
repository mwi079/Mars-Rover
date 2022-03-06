const {moves, turns}=require('./constants');

const string1= '4 8 \n (2, 3, E) LFRFF \n (0, 2, N) FFLFRFF'
const string2= '4 8 \n (2, 3, N) FLLFR \n (1, 0, S) FFRLF'
const input=parseInput(string2)
const roverData=moveRovers(input)
const output=parseOutput(roverData)
console.log(output)

function parseInput(string){

   const array=string.split('\n');
   const limits=array.shift().trim().split(' ');
    const xmax=+limits[0];
    const ymax=+limits[1];
    const rovers=[];
    
    for (const rover of array){
        const roverData=rover.trim().split(' ');
        const x=+roverData[0].replace(/\D+/g,'');
        const y=+roverData[1].replace(/\D+/g,'');
        const direction= roverData[2].replace(/[^A-Z]+/g,'');
        const journey=roverData[3].split('');
        let lost=false;
        rovers.push({direction,x,y,journey,lost});
    }
    return {rovers,xmax,ymax};
};


function moveRovers({rovers, xmax, ymax}){
    for(const rover of rovers){
        for (const move of rover.journey){
            if(move==='F'){
                const axis=moves[rover.direction].axis;
                const change=moves[rover.direction].change;
                rover[axis]+=change
                if(rover.x>xmax||rover.x<0||rover.y>ymax||rover.y<0) {
                    rover.lost=true;
                    rover[axis]-=change;
                    break;
                };
            }
            else{
                rover.direction=turns[rover.direction][move];
            }
        }   
    }
    return rovers;
};

function parseOutput(roverData){
    let result='';
    for (const [index,rover] of roverData.entries()){
        if(index<roverData.length-1) result=result.concat(`(${rover.x}, ${rover.y}, ${rover.direction})${rover.lost?' LOST':''}\n`);
        else  result=result.concat(`(${rover.x}, ${rover.y}, ${rover.direction})${rover.lost?' LOST':''}`);
    }
    return result;
};

module.exports={parseInput,moveRovers,parseOutput}






