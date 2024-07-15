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
  this.width = 500;
  this.top = (height - this.height) / 2;
  this.bot = this.top + this.height;
  this.left = (width - this.width) / 2;
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
    ctx.strokeStyle = "#19A598";
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

  for (var jj = 0; jj < kenjiPtArrs.length; jj++) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(width / 2, height / 2)
    ctx.strokeStyle = "#19A598";

    for (var i = 0; i < kenjiPtArrs[jj].length; i += 1) {
      if (line.y - height / 2 > kenjiPtArrs[jj][i].y) biv = 0;
      else biv = 10;

      if (i == 0) ctx.moveTo(kenjiPtArrs[jj][i].x + (Math.random() - .5) * biv, kenjiPtArrs[jj][i].y + (Math.random() - .5) * biv);
      else ctx.lineTo(kenjiPtArrs[jj][i].x + (Math.random() - .5) * biv, kenjiPtArrs[jj][i].y + (Math.random() - .5) * biv);
    }

    if (line.y - height / 2 > kenjiPtArrs[jj][0].y) biv = 0;
    else biv = 10;

    ctx.moveTo(kenjiPtArrs[jj][0].x + (Math.random() - .5) * biv, kenjiPtArrs[jj][0].y + (Math.random() - .5) * biv);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  line.draw();
  requestAnimationFrame(loop);
}
