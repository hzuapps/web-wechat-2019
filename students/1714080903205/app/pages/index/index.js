//index.js

var startX = 0;

var startY = 0;

var moveX = 0;

var moveY = 0;



var diffX = 0;

var diffY = 0;



var snakeW = 10;

var snakeH = 10;



var context = null;





var snakeHead = {

  color: "#0000ff",

  x: 0,

  y: 0,

  w: snakeW,

  h: snakeH

};





var snakeBodys = [];





var windowW = 0;

var windowH = 0;




var foods = [];



var snakeMoveDirection = "right";





var score = 0;


var snakeLength = 0;



var shouldRemoveBody = true;



var perSocre = 5;



var count = 1;



var defaultSpeedLevel = 10;

var moveSpeedLevel = defaultSpeedLevel;



var perform = 0;




var eatFoodCount = 0;



var speederPerFood = 2;



Page({

  touchStart: function (e) {



    startX = e.touches[0].x;

    startY = e.touches[0].y;





  },



  touchMove: function (e) {



    moveX = e.touches[0].x;

    moveY = e.touches[0].y;



    diffX = moveX - startX;

    diffY = moveY - startY;





    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0 && !(snakeMoveDirection == "left")) {



      snakeMoveDirection = "right";



    } else if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0 && !(snakeMoveDirection == "right")) {



      snakeMoveDirection = "left";



    } else if (Math.abs(diffX) < Math.abs(diffY) && diffY > 0 && !(snakeMoveDirection == "top")) {



      snakeMoveDirection = "bottom";



    } else if (Math.abs(diffX) < Math.abs(diffY) && diffY < 0 && !(snakeMoveDirection == "bottom")) {



      snakeMoveDirection = "top";



    }

  },









  onReady: function (e) {




    function randomAB(A, B) {

      return parseInt(Math.random() * (B - A) + A);

    }


    function Food() {

      this.color = "rgb(" + randomAB(0, 255) + "," + randomAB(0, 255) + "," + randomAB(0, 255) + ")";

      this.x = randomAB(0, windowW);

      this.y = randomAB(0, windowH);

      var w = randomAB(10, 20);

      this.w = w;

      this.h = w;




      this.reset = function () {

        this.color = "rgb(" + randomAB(0, 255) + "," + randomAB(0, 255) + "," + randomAB(0, 255) + ")";

        this.x = randomAB(0, windowW);

        this.y = randomAB(0, windowH);

        var w = randomAB(10, 20);

        this.w = w;

        this.h = w;

      }

    }





    function eatFood(snakeHead, food) {

      var sL = snakeHead.x;

      var sR = sL + snakeHead.w;

      var sT = snakeHead.y;

      var sB = sT + snakeHead.h;



      var fL = food.x;

      var fR = fL + food.w;

      var fT = food.y;

      var fB = fT + food.h;



      if (sR > fL && sB > fT && sL < fR && sT < fB && sL < fR) {

        return true;

      } else {

        return false;

      }

    }





    function initGame() {

      snakeHead.x = 0;

      snakeHead.y = 0;

      snakeBodys.splice(0, snakeBodys.length);

      snakeMoveDirection = "right";



      context = wx.createContext();

      foods.splice(0, foods.length);



      score = 0;

      count = 1;

      moveSpeedLevel = defaultSpeedLevel;

      perform = 0;

      eatFoodCount = 0;







      var i = 1;

      var food = new Food();

      foods.push(food);


    }
    function beginGame() {





      initGame();





      function drawObj(obj) {



        context.setFillStyle(obj.color);

        context.beginPath();

        context.rect(obj.x, obj.y, obj.w, obj.h);

        context.closePath();

        context.fill();

      }







      function beginDraw() {



        for (var i = 0; i < foods.length; i++) {

          var food = foods[i];

          drawObj(food);





          if (eatFood(snakeHead, food)) {



            food.reset();



            wx.showToast({

              title: "+" + food.w + "分",

              icon: 'succes',

              duration: 500

            })

            score += food.w;





            eatFoodCount++

            if (eatFoodCount % speederPerFood == 0) {



              moveSpeedLevel -= 1;

              if (moveSpeedLevel <= 2) {

                moveSpeedLevel = 2;

              }

            }



          }

        }



        if (++perform % moveSpeedLevel == 0) {

          // 添加蛇身

          snakeBodys.push({

            color: "#00ff00",

            x: snakeHead.x,

            y: snakeHead.y,

            w: snakeW,

            h: snakeH

          });



          // 移除蛇身

          if (snakeBodys.length > 5) {



            if (score / perSocre >= count) { // 得分



              count++;





              shouldRemoveBody = false;



            }



            if (shouldRemoveBody) {



              snakeBodys.shift();

            }

            shouldRemoveBody = true;

          }

          switch (snakeMoveDirection) {

            case "left":

              snakeHead.x -= snakeHead.w;

              break;

            case "right":

              snakeHead.x += snakeHead.w;

              break;

            case "top":

              snakeHead.y -= snakeHead.h;

              break;

            case "bottom":

              snakeHead.y += snakeHead.h;

              break;

          }



          // 游戏失败

          if (snakeHead.x > windowW || snakeHead.x < 0 || snakeHead.y > windowH || snakeHead.y < 0) {

            // console.log("游戏结束");

            wx.showModal({

              title: "总得分:" + score + "分",

              content: '加油继续努力',

              success: function (res) {

                console.log(res)

                if (res.confirm) {

                  // console.log('用户点击确定')

                  beginGame();



                } else {

                  initGame();

                  wx.navigateBack({

                    delta: 1

                  })

                }

              }

            })



            return;

          }



        }









        // 绘制蛇头

        drawObj(snakeHead);



        // 绘制蛇身体

        for (var i = 0; i < snakeBodys.length; i++) {

          var snakeBody = snakeBodys[i];

          drawObj(snakeBody);

        }



        // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为

        wx.drawCanvas({

          canvasId: 'snakeCanvas',

          actions: context.getActions() // 获取绘图动作数组

        });

        // 循环执行动画绘制

        requestAnimationFrame(beginDraw);

      }

      beginDraw();

    }



    wx.getSystemInfo({

      success: function (res) {

        // console.log(res.windowWidth);

        // console.log(res.windowHeight);

        windowW = res.windowWidth;

        windowH = res.windowHeight;



      }

    })



    wx.showModal({

      title: '请开始游戏',

      success: function (res) {

        if (res.confirm) {

          beginGame();

        } else {

          initGame();

          wx.navigateBack({

            delta: 1

          })

        }

      }

    });



  }





})