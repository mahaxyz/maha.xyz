(() => {
    let letterL = [
        [25.1, 27.5],
        [25.1, 121.4],
        [77.4, 121.4],
        [77.4, 111.5],
        [37, 111.5],
        [37, 27.5]
    ];
  
    let letterOuterO = [
        [157.5, 25.9],
        [151.5, 26.8],
        [146, 27.8],
        [141.3, 29.2],
        [136.7, 31.6],
        [132.4, 34.9],
        [128.3, 38.7],
        [124.7, 42.6],
        [120.2, 50.5],
        [118.1, 55],
        [115.2, 75],
        [118.1, 93.1],
        [120.2, 98.8],
        [124.7, 105.8],
        [128.3, 110.8],
        [132.4, 113.6],
        [136.7, 117],
        [141.3, 119.2],
        [146, 119.4],
        [151.5, 121.1],
        [157.5, 122.9],
        [160.8, 121.4],
        [165.2, 121.1],
        [169.4, 119.8],
        [174.2, 118.7],
        [179.3, 115.6],
        [183.6, 113.6],
        [187.9, 109.8],
        [192.2, 104.3],
        [196.5, 96.7],
        [201, 75],
        [196.5, 51.2],
        [192.2, 43.1],
        [187.9, 37.8],
        [183.6, 33.5],
        [179.3, 31.3],
        [174.2, 28.9],
        [169.4, 27.3],
        [165.2, 27.1],
        [160.1, 26.1],
        [157.5, 25.9]
    ];
  
    let letterInnerO = [
        [157.5, 35.7],
        [151.5, 36.6],
        [146, 38.1],
        [141.3, 40.9],
        [136.7, 45.7],
        [132.4, 52.2],
        [128.3, 75],
        [132.4, 95.5],
        [136.7, 102.2],
        [141.3, 106.5],
        [146, 109.8],
        [151.5, 111.5],
        [157.5, 112.5],
        [160.8, 112.2],
        [165.2, 111],
        [169.4, 109.6],
        [174.2, 107.6],
        [179.3, 102.4],
        [183.6, 95.7],
        [187.9, 75],
        [183.6, 53.4],
        [179.3, 46.4],
        [174.2, 41.2],
        [169.4, 38.1],
        [165.2, 36.8],
        [160.8, 35.7],
        [157.5, 35.7]
    ];
  
    let letterOuterA = [
        [271, 27.1],
        [238.8, 121.4],
        [252.1, 121.4],
        [261, 91.2],
        [295.4, 91.2],
        [305.4, 121.4],
        [317.7, 121.4],
        [285.4, 27.1],
        [271, 27.1]
    ];
  
    let letterInnerA = [
        [277.9, 38.3],
        [264.1, 82],
        [292.3, 82]
    ];
  
    let letterOuterD = [
        [361.8, 28.4],
        [361.8, 121.4],
        [373.8, 121.5],
        [385.7, 121.6],
        [394.8, 121.4],
        [402.5, 119.9],
        [408.5, 118],
        [415.4, 116],
        [421.6, 112.2],
        [427.4, 107],
        [433.1, 98.6],
        [438.7, 75],
        [433.1, 46.9],
        [427.4, 40.2],
        [421.6, 34.4],
        [415.4, 31.1],
        [408.5, 28.7],
        [402.5, 27.5],
        [394.8, 26.5],
        [385.7, 26.6],
        [373.8, 26.5],
        [361.8, 28.4]
    ];
  
    let letterInnerD = [
        [373.8, 36.6],
        [373.8, 112.2],
        [385.7, 112.9],
        [394.8, 111.5],
        [402.5, 109.6],
        [408.5, 107.9],
        [415.4, 103.1],
        [421.6, 95.7],
        [427.4, 75],
        [421.6, 51.2],
        [415.4, 44],
        [408.5, 39.7],
        [402.5, 37.3],
        [394.8, 35.9],
        [385.7, 35.4],
        [373.8, 36.6]
    ];
  
    let letterI = [
        [485.4, 27.1],
        [485.4, 121.4],
        [497.1, 121.4],
        [497.1, 27.1]
    ];
  
    let letterN = [
        [549.2, 27.1],
        [549.2, 121.4],
        [559.5, 121.4],
        [559.5, 42.1],
        [607.8, 121.4],
        [619.3, 121.4],
        [619.3, 27.1],
        [607.8, 27.1],
        [607.8, 104.8],
        [561.4, 27.1],
        [549.2, 27.1]
    ];
  
    let letterG = [
        [739.7, 30.1],
        [728.5, 27.3],
        [718.5, 25.9],
        [708.4, 27],
        [698.2, 28.5],
        [689, 32.1],
        [680, 38.1],
        [673.8, 45.4],
        [669.5, 52.7],
        [667.1, 58.1],
        [664.9, 75],
        [667.1, 87.6],
        [669.5, 96.9],
        [673.8, 104.3],
        [680, 111.3],
        [689, 117],
        [698.2, 119.8],
        [708.4, 121.4],
        [718.5, 121.4],
        [728.5, 119.9],
        [739.7, 117.9],
        [742.8, 116.8],
        [742.8, 71],
        [712, 71],
        [712, 81.1],
        [731.1, 81.1],
        [731.1, 109.8],
        [728.5, 110.7],
        [718.5, 112],
        [708.4, 112.2],
        [698.2, 109.5],
        [689, 103.4],
        [680, 89.5],
        [678, 75],
        [680, 59.3],
        [689, 45.7],
        [698.2, 38.9],
        [708.4, 35.7],
        [718.5, 35.7],
        [728.5, 37],
        [731.1, 37.7],
        [731.1, 49.8],
        [742.8, 49.8],
        [742.8, 30.1],
        [739.7, 30.1]
    ];
  

const convertPath = (letter) => {
    let newLetter = [];
    for(let i = 0; i < letter.length; i++){
        const x = letter[i][0] * 0.0015;
        const y = letter[i][1] * 0.0015 + 0.38;
        newLetter.push([x, y]);
    }
    return newLetter;
}

letterL = convertPath(letterL);
letterOuterO = convertPath(letterOuterO);
letterInnerO = convertPath(letterInnerO);
letterOuterA = convertPath(letterOuterA);
letterInnerA = convertPath(letterInnerA);
letterOuterD = convertPath(letterOuterD);
letterInnerD = convertPath(letterInnerD);
letterI = convertPath(letterI);
letterN = convertPath(letterN);
letterG = convertPath(letterG);

var letterArray = [letterL, letterOuterO, letterInnerO, letterOuterA, letterInnerA, letterOuterD, letterInnerD, letterI, letterN, letterG];

var size = 400;
if (size > window.innerHeight) size = window.innerHeight * .8;
var textNumber = 90;
var kenjiPtArrs = [];

for (var ii = 0; ii < letterArray.length; ii++) {
    kenjiPtArrs[ii] = [];

    var kankakuDuration = parseInt(textNumber / letterArray[ii].length) + 1;
    var curNumber = textNumber;

    for (var jj = 0; jj < letterArray[ii].length; jj++) {
        for (var kk = 0; kk < kankakuDuration; kk++) {
            var ptX, ptY;

            var rate = kk / kankakuDuration;
            var curNum = jj;
            var nextNum = (jj + 1) % letterArray[ii].length;

            if (letterArray[ii][nextNum].length == 6) {
                //ptX = letterArray[ii][curNum][0] * size * (1 - rate) +  letterArray[ii][nextNum][0] * size * rate;
                //ptY = letterArray[ii][curNum][1] * size * (1 - rate) +  letterArray[ii][nextNum][1] * size * rate;
                var x1, y1, x2, y2, x3, y3, x4, y4;
                if (letterArray[ii][curNum].length == 2) {
                    x1 = letterArray[ii][curNum][0] * size;
                    y1 = letterArray[ii][curNum][1] * size;
                } else if (letterArray[ii][curNum].length == 6) {
                    x1 = letterArray[ii][curNum][4] * size;
                    y1 = letterArray[ii][curNum][5] * size;
                }

                x2 = letterArray[ii][nextNum][0] * size;
                y2 = letterArray[ii][nextNum][1] * size;
                x3 = letterArray[ii][nextNum][2] * size;
                y3 = letterArray[ii][nextNum][3] * size;
                x4 = letterArray[ii][nextNum][4] * size;
                y4 = letterArray[ii][nextNum][5] * size;


                ptX = x1 * (1 - rate) * (1 - rate) * (1 - rate) + x2 * 3 * (1 - rate) * (1 - rate) * rate + x3 * 3 * (1 - rate) * rate * rate + rate * rate * rate * x4;
                ptY = y1 * (1 - rate) * (1 - rate) * (1 - rate) + y2 * 3 * (1 - rate) * (1 - rate) * rate + y3 * 3 * (1 - rate) * rate * rate + rate * rate * rate * y4;

            } else {
                if (letterArray[ii][curNum].length == 2) {
                    ptX = letterArray[ii][curNum][0] * size * (1 - rate) + letterArray[ii][nextNum][0] * size * rate;
                    ptY = letterArray[ii][curNum][1] * size * (1 - rate) + letterArray[ii][nextNum][1] * size * rate;
                } else if (letterArray[ii][curNum].length == 6) {
                    ptX = letterArray[ii][curNum][4] * size * (1 - rate) + letterArray[ii][nextNum][0] * size * rate;
                    ptY = letterArray[ii][curNum][5] * size * (1 - rate) + letterArray[ii][nextNum][1] * size * rate;
                }
            }

            var pos = {x: ptX - size / 2 - 35, y: ptY - size / 2};
            kenjiPtArrs[ii].push(pos);
        }
        curNumber -= kankakuDuration;
        if (kankakuDuration > curNumber) kankakuDuration = curNumber;
    }
}


// --------------------------

var width, height, prevTime;
var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var rot = 0;

width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;


// ================

var Line = function () {

    this.height = 150;
    this.width  = 500;

    this.top =  (height - this.height)/2;
    this.bot = this.top + this.height;
    this.left = (width  - this.width)/2;


    this.x0 = this.left;
    this.x1 = this.width + this.left;

    this.velY = 2;

    this.y = this.top;
};

Line.prototype = {
    update: function () {
        this.y += this.velY;

        if (this.y > this.bot) {
            this.y = this.bot;
            this.velY = -2;
        }

        if (this.y < this.top) {
            this.y = this.top;
            this.velY = 2;
        }
    },

    draw: function () {

        ctx.save();
        ctx.strokeStyle = "#FF4D00 ";
        ctx.moveTo(this.x0, this.y);
        ctx.lineTo(this.x1, this.y);
        ctx.stroke();


        ctx.strokeRect(this.left, this.top, this.width, this.height);
        ctx.restore();
    }


};

// ================


var rate;
var line;

init();
loop();


function init() {
    line = new Line();

    prevTime = +new Date;

    //setTimeout(timer, 500);
}

function loop() {
    line.update();

    rot += .1;
    var curTime = +new Date;
    var duration = (curTime - prevTime) / 1000;
    prevTime = curTime;

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = 'rgba(30, 30, 30, .3)';
    ctx.fillRect(0, 0, width, height);



    var biv;

    for(var jj = 0; jj < kenjiPtArrs.length; jj++) {
        ctx.save();
        ctx.beginPath();

        ctx.translate(width / 2, height / 2)

        ctx.strokeStyle = "#FF4D00 ";


        for (var i = 0; i < kenjiPtArrs[jj].length; i+= 1) {


            if (line.y - height / 2 > kenjiPtArrs[jj][i].y) biv = 0;
            else                       biv = 10;

            if (i == 0) ctx.moveTo(kenjiPtArrs[jj][i].x + (Math.random() -.5)* biv, kenjiPtArrs[jj][i].y + (Math.random() -.5) * biv);
            else        ctx.lineTo(kenjiPtArrs[jj][i].x + (Math.random() -.5) * biv, kenjiPtArrs[jj][i].y + (Math.random() -.5) * biv);

        }


        if (line.y - height / 2 > kenjiPtArrs[jj][0].y) biv = 0;
        else                       biv = 10;

        ctx.moveTo(kenjiPtArrs[jj][0].x + (Math.random() -.5)* biv, kenjiPtArrs[jj][0].y + (Math.random() -.5) * biv);

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }


    //}

    line.draw();

    requestAnimationFrame(loop);
}

function timer() {
    rate = 0;
    TweenLite.to(this, .75, {rate: 1, onUpdate: onUpdateTweenHandler, onComplete: onCompleteTwennHandler, ease: Elastic.easeInOut});

    setTimeout(timer, 1000);
}

function onUpdateTweenHandler() {
    var nextCount = (count + 1) % kenjiPtArrs.length;
    for (var i = 0; i < 360; i++) {

        var xPos = kenjiPtArrs[count][i].x * (1 - rate) + kenjiPtArrs[nextCount][i].x * rate;
        var yPos = kenjiPtArrs[count][i].y * (1 - rate) + kenjiPtArrs[nextCount][i].y * rate;
        curPtArr[i] = {x: xPos, y: yPos};
    }

}

function onCompleteTwennHandler() {
    count = (count + 1) % kenjiPtArrs.length;
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

})();