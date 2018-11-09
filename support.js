//格子到顶部/左端的距离
function getPos(num) {
    return 20+num*120;
}


//相对数字的背景颜色
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
}

//设置随机生成2和4的颜色
function getNumberColor(number) {
    if (number <= 4){
        return "#776465"
    }
    return "#ffffff";
}

// //判断是否有空格
// function nospace(board) {
//     for (var i=0;i<4;i++){
//         for (var j=0;j<4;j++){
//             if (board[i][j] == 0){
//                 return false;
//             }
//         }
//         return true;
//     }
// }




function canMoveLeft(board) {
    for (var i =0;i<4;i++){
        for (var j = 1;j<4;j++){
            if (board[i][j] != 0){
                //当前数字格的左边前一个值为0或者当前数字格的值与左边第一个数字格的值相等
                if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i =0;i<4;i++){
        for (var j = 2;j>=0;j--){
            if (Number(board[i][j]) != 0){
                if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}


function canMoveUp(board) {
    for (var j =0;j<4;j++){
        for (var i = 1;i<4;i++){
            if (board[i][j] != 0){
                if (board[i-1][j] == 0 || board[i-1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board) {
    for (var j =0;j<4;j++){
        for (var i = 2;i>=0;i--){
            if (board[i][j] != 0){
                if (board[i+1][j] == 0 || board[i+1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}




//判断当前数字格水平的数字格是否值为0
function noBoardHorizontal(row,col1,col2,board) {
    for (var i = col1 + 1; i< col2;i++){
        if (board[row][i]!=0){
            return false;
        }
    }
    return true;
}

//判断当前数字格垂直方向的数字是否为0
function noBoardVertical(col,row1,row2,board) {
    for (var i = row1+1;i<row2;i++){
        if (board[i][col]!=0){
            return false;
        }
    }
    return true;
}


//跟新分数
function updateScore(num){
    $('#score').text(num);
}

//判断游戏是否结束
function isgameover(board){
    if (!canMoveLeft(board) && !canMoveUp(board) && !canMoveRight(board) && !canMoveDown(board)) {
        alert("游戏结束，请重新开始游戏！");
    }
}
