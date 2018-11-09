//随机数字显示的动画逻辑
function showNumberWithAnimation(i,j,randNumber) {
    //获取当前数字格
    var numberCell = $("#number-cell-"+i+"-"+j);
    //设置当前数字格的背景色和前景色及数字值
    numberCell.css("backgroundColor",getNumberBackgroundColor(randNumber));
    numberCell.css("color",getNumberColor(randNumber));
    numberCell.text(randNumber);//设置被返回的内容
    //设置当前的数字格子的显示动画
    numberCell.animate({
        with:"100px",
        height:"100px",
        top:getPos(i),
        left:getPos(j),
    },300);
}

function showMoveAnimation(fromx,fromy,tox,toy) {
    //获取当前的数字格的元素
    var numberCell = $("#number-cell-"+ fromx + "-" + fromy);
    numberCell.animate({
        top:getPos(tox),
        left:getPos(toy),
    },200)
}