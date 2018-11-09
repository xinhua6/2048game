//定义一个数组
var board = new Array();
var score = 0;
// $(function(){
//     newgame();
// });


$(document).ready(function () {
    newgame();
})


function newgame() {
    updateScore(0);
    //初始化棋盘格
    init();
    //在随机两个格子中生成数字
    generateOneNumber();
    generateOneNumber();
}

//init();

function init() {
    for (var i =0;i<4;i++){
        board[i] = new Array();
        for (var j= 0;j<4;j++){
            board[i][j] = 0;
            //通过双重遍历获取每个格子的元素
            var eachGrid = $('#grid-cell-'+i+'-'+j);
            //通过getPostTop()获取每个格子距离顶部的高度和到左端的距离
            //eachGrid.css({"top":getPos(i),"left":getPos(j)});无效
            eachGrid.css('top',getPos(i));
            eachGrid.css('left',getPos(j));
        }
    }
    updateBoardView();
}


//初始化数字格子
function updateBoardView() {
    //首先清空之前的数字格布局内容
    $(".number-cell").remove();
    for (var i =0;i < 4; i++){
        for (var j = 0; j < 4; j++){
            //向棋盘上增加数字格
            $("#container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var numberCell = $('#number-cell-'+i+'-'+j);
            //如果棋盘格的值为0的话，设置数字格的高宽都为0
            if (board[i][j] == 0){
                numberCell.css('width','0px');
                numberCell.css('height','0px');
                numberCell.css("top",getPos(i)+50);
                numberCell.css("left",getPos(j)+50);
            }
            else {
                numberCell.css({
                    width:'100px',
                    height:'100px',
                    top:getPos(i),
                    left:getPos(j),
                    backgroundColor:getNumberBackgroundColor(board[i][j]),
                    color:getNumberColor(board[i][j])
                });
                numberCell.text(board[i][j]);
            }
        }
    }
}


function generateOneNumber() {
    //生成一个随机位置的随机数
    //1生成随机的位置
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    //定义一个死循环，完成生成随机空格子
    while (true){
        //如果当前的格子为0，满足条件
        if (board[randx][randy] == 0){
            break;
        }
        //否则重新随机一个位置
        var randx = Math.floor(Math.random()*4);
        var randy = Math.floor(Math.random()*4);
    }
    //2生成随机的数字,只能生成2或4
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    //3在随机的位置上显示出随机的数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx,randy,randNumber);


}


