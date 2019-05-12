const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png' /*面板组件构成*/
let menupic = new Image()
menupic.src = 'images/menu.jpg' /*菜单构成*/

export default class GameInfo {
  renderGameScore(ctx, score) {
    ctx.fillStyle = "#ffffff"
    ctx.font      = "20px Arial"
    ctx.fillText(
      '🏆 ',
      10,
      30
    )
    ctx.fillText(
      score,
      40,
      30
    )
  }
  //画出血量
  renderGameHp(ctx, hp) {
    ctx.fillStyle = "#ff0000"
    ctx.font = "20px Arial"
    ctx.fillText(
      '❤  ',
      13,
      70
    )
    ctx.fillText(
      hp,
      40,
      70
    )
    ctx.fillText(
      ' / 3',
      50,
      70
    )
  }
  renderGameOver(ctx, score) //游戏结束
  {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      '歼敌数:  ' + score,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    /*面板绘制---红火火恍恍惚惚*/
    ctx.drawImage( 
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 150,
      120, 40
    )

    ctx.fillText  (
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 175
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 200,
      120, 40
    )
    //返回菜单的ui布局
    ctx.fillText(
      '返回菜单',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 225
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea_restart = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 150,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 175
    }
    //返回菜单的按钮区域判断
    this.btnArea_remean = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 200,
      endX: screenWidth / 2 + 50,
      endY: screenHeight / 2 - 100 + 225
    }
  }
  renderMenu(ctx) //k开始菜单
  {
    ctx.drawImage(menupic, 0, 0, screenWidth, screenHeight)
    /* *
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea_start = {
      startX: screenWidth / 2 - 100,
      startY: screenHeight / 2 - 100 + 225,
      endX: screenWidth / 2 + 100,
      endY: screenHeight / 2 - 100 + 400
    }
  }
}

