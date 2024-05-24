let score={
    win:0,
    lost:0,
    tie:0,
};


function game(){
    let randomNumber=Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
        return 'Bat';
    }else if(randomNumber>1 && randomNumber<=2){
        return 'Ball';
    }else{
        return 'Stump';
    }
}
function result(userMove,computerMove){
    if(userMove=='Bat'){
        if(computerMove==='Bat'){
            score.tie++;
            return 'It is a tie';
        }else if(computerMove==='Ball'){
            score.win++;
            return 'You won';
        }else{
            score.lost++;
            return 'Computer won';
        }
    }else if(userMove=='Ball'){
        if(computerMove==='Bat'){
            score.lost++;
            return 'Computer won';
        }else if(computerMove==='Ball'){
            score.tie++;
            return 'Its is a tie';
        }else{
            score.win++;
            return 'You won';
        }
    }else{
        if(computerMove==='Bat'){
            score.win++;
            return 'You won';
        }else if(computerMove==='Ball'){
            score.lost++;
            return 'Computer won';
        }else{
            score.tie++;
            return 'It is a tie';
        }
    }
}
function showResult(userMove, computerMove, result) {
    alert(`You have chosen ${userMove}. And computer chosen ${computerMove}
    
    ${result}
    
    Win:${score.win}, Lost:${score.lost}, Tie:${score.tie}`);
}