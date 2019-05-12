import GameInfo from './runtime/gameinfo'
import Music from './runtime/music'

import Main from './main'
let ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Menu
{
  constructor() 
  {
    
    this.remenu()
  }
  /**菜单绘制 */
  remenu()
  {
    this.music = new Music()
    this.gameinfo = new GameInfo()
    this.music.playmenu()
    this.gameinfo.renderMenu(ctx)
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }
  /**菜单按钮监听 */
  //游戏结束后的触摸事件处理逻辑

  touchEventHandler(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    //获取结束时按钮面板信息
    let area = this.gameinfo.btnArea_start
    //按钮事件监听
    if (x >= area.startX  && x <= area.endX  && y >= area.startY  && y <= area.endY)
    {
      canvas.removeEventListener(
        'touchstart',
        this.touchHandler
      )
      new Main()
    }
  }
}