var foods = new Array(
"子固路拌粉","江西炒粉","便利店","食堂三楼","食堂二楼"
,"大馄饨","小馄饨","重庆小面","鸡公煲","炸鸡"
,"炸酱面","过桥米线","盖浇饭","桂林米粉","炒年糕"
,"牛肉面","烧烤","粥","麻辣烫","关东煮"
,"泡面","肥牛饭","鳗鱼饭");

function Roll() {
    result = document.getElementById("result");
    randNum = Math.floor(Math.random() * foods.length);
    result.innerHTML = foods[randNum];

    button = document.getElementById("button");
    button.innerHTML = "重来";
}