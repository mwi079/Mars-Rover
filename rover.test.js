const input1= '4 8 \n (2, 3, E) LFRFF \n (0, 2, N) FFLFRFF';
const input2= '4 8 \n (2, 3, N) FLLFR \n (1, 0, S) FFRLF';
const output1='(4, 4, E)\n(0, 4, W) LOST';
const output2='(2, 3, W)\n(1, 0, S) LOST';
const {parseInput,moveRovers,parseOutput}=require('./rover');

describe('Given Examples', ()=>{

    test('First Example', ()=>{
        expect(parseOutput(moveRovers(parseInput(input1)))).toBe(output1)
    });

    test('Second Example', ()=>{
        expect(parseOutput(moveRovers(parseInput(input2)))).toBe(output2)
    });

})