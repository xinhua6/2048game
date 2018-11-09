$(document).keydown(function (event) {
    event.preventDefault();//阻止默认的事件行为
    switch(event.keyCode){
        case 37://left
            if (canMoveLeft(board)){
                moveLeft();
                setTimeout(function () {
                    generateOneNumber();
                },210);
                setTimeout(function () {
                    isgameover(board)
                },300);
            }
            break;
        case 38://up
            if (canMoveUp(board)){
                moveUp();
                setTimeout(function () {
                    generateOneNumber();
                },210);
                setTimeout(function () {
                    isgameover(board)
                },300);
            }
            break;
        case 39://right
            if (canMoveRight(board)){
                moveRight();
                setTimeout(function () {
                    generateOneNumber();
                },210);
                setTimeout(function () {
                    isgameover(board)
                },300);
            }
            break;
        case 40://down
            if (canMoveDown(board)){
                moveDown();
                setTimeout(function () {
                    generateOneNumber();
                },210);
                setTimeout(function () {
                    isgameover(board)
                },300);
            }
            break;
    }
});

function moveLeft() {
    //moveLeft   左移要注意不是第一列
    for (var i = 0; i < 4; i++){
        for (var j = 1; j < 4; j++){
            if (Number(board[i][j]) != 0){
                for (var k = 0;k<j;k++){
                    if (board[i][k]==0 && noBoardHorizontal(i,k,j,board)) {
                        //向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if (board[i][k] == board[i][j] && noBoardHorizontal(i,k,j,board)){
                        //向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                } 

            }
        }
    }
    //设置刷新时间是为了让运动的动画走完再进行跟新数字格，否则数字格运动的动画将会被打断
    setTimeout(updateBoardView(),200);
}


function moveRight() {
    for (var i = 0; i < 4; i++){
        for (var j = 2; j >=0; j--){
            if (Number(board[i][j]) != 0){
                for (var k = 3;k>j;k--){
                    if (board[i][k]==0 && noBoardHorizontal(i,j,k,board)) {
                        //向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if (board[i][k] == board[i][j] && noBoardHorizontal(i,j,k,board)){
                        //向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                    }
                }

            }
        }
    }
    setTimeout(updateBoardView(),200);
}

function moveUp() {
    for (var j=0;j<4;j++){
        for (var i=1;i<4;i++){
            if (board[i][j] != 0){
                for (var k=0;k<i;k++){
                    if (board[k][j] == 0 && noBoardVertical(j,k,i,board) ){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBoardVertical(j,k,i,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                        continue;
                    }
                } 
            } 
        } 
    }
    setTimeout(updateBoardView(),200);
}


function moveDown() {
    for (var j=0;j<4;j++){
        for (var i=2;i>=0;i--){
            if (board[i][j] != 0){
                for (var k=3;k>i;k--){
                    if (board[k][j] == 0 && noBoardVertical(j,i,k,board) ){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBoardVertical(j,i,k,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        score += board[i][k];
                        updateScore(score);
                        board[i][j] = 0;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updateBoardView(),200);
}