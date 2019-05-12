import Player     from './player/index'
import Sboss from './npc/smallboss'
import Enemy      from './npc/enemy'
import GetSkill from './npc/getskill'
import Blood from './npc/blood'
import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import DataBus from './databus'
import BoBullet from './npc/BoBullet'
import Menu from './menu'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()
//let skill=0  //获取双弹头
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    /*wx.onHide(function ()
    { 
      /*canvas.removeEventListener(
        'touchstart',
        this.touchHandler
      )
      new Menu()*/
      //wx.exitMiniProgram();
    //})
    this.restart()
  }

/**开始ui绘制 */

/**重新开始的初始化 */
  restart()
  {
    databus.reset()
    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )
    this.bg       = new BackGround(ctx)
    this.player   = new Player(ctx)
    this.gameinfo = new GameInfo()
    this.music    = new Music()
    this.music.playBgm()
    this.player.defaultbuttle()
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }

  /**游戏结束时返回开始菜单 */
  /*remean()
  {
    this.music = new Music()
    this.gameinfo = new GameInfo()
    databus.remenu()
    this.music.playmenu()
    this.gameinfo.renderMenu(ctx)
    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )
    this.touchHandler1 = this.menuEventHandler.bind(this)
    canvas.addEventListener('menustart', this.touchHandler1)
    /*window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )*/
  //}

  /**
   * 随着帧数变化的敌机生成逻辑
   * 帧数取模定义成生成的频率
   */
  enemyGenerate() 
  { //每秒30帧出现一次
    if (databus.frame % 30 === 0)  //databus.frame % 30 === 0
    {
      let enemy = databus.pool.getItemByClass('enemy', Enemy)
      enemy.init(5) //speed初始化
      databus.enemys.push(enemy)
    }
  }
  sbossGenerate() { //每秒30帧1/3概率出现一次大怪
    if (databus.score == 88)  wx.showToast({ title: '难度提高...' });
    if(databus.score>88)
    {
      if (databus.frame % 30 === 0)  //databus.frame % 30 === 0
      {
        let num = Math.floor(Math.random() * 2) //0--3
        if (num == 1) {
          let sboss = databus.pool.getItemByClass('sboss', Sboss)
          sboss.init(4) //speed初始化
          databus.sboss.push(sboss)
        }
      }
    }
  }

  //技能生成
  skillGenerate()
  {
    let num = Math.floor(Math.random() * 1000) //0--10
    if (num<2)
    {
      let skill = databus.pool.getItemByClass('skill', GetSkill)
      skill.init(6)
      databus.skills.push(skill)
    }
  }
  //血块生成
  bloodGenerate() {
    let num = Math.floor(Math.random() * 1000) //0--10
    if (num < 1) {
      let blood = databus.pool.getItemByClass('blood', Blood)
      blood.init(6)
      databus.bloods.push(blood)
    }
  }


  // 全局碰撞检测
  collisionDetection()
   {
    let that = this

    databus.bullets.forEach((bullet) => {
      for ( let i = 0, il = databus.enemys.length; i < il;i++ ) //子弹打小怪
      {
        let enemy = databus.enemys[i]

        if ( !enemy.isPlaying && enemy.isCollideWith(bullet) ) {
          enemy.playAnimation()
          that.music.playExplosion()

          bullet.visible = false
          databus.score  += 1
          break
        }
      }
      for (let i = 0, il = databus.sboss.length; i < il; i++)//子弹打大怪
       {
        let sboss = databus.sboss[i]

        if (!sboss.isPlaying && sboss.isCollideWith(bullet)) {
          sboss.playAnimation()
          that.music.playExplosion()
          bullet.visible = false
          databus.score += 2
          databus.removeSBoss(sboss)
          break
        }
      }
      for (let i = 0, il = databus.bossbullets.length; i < il; i++) //子弹打子弹
      {
        let enemy = databus.bossbullets[i]
        if (enemy.isCollideWith(bullet)) {
          that.music.playExplosion()
          bullet.visible = false
          enemy.visible = false
          break
        }
      }
    })
    //获得技能
    for (let i = 0, il = databus.skills.length; i < il; i++) {
      let skill = databus.skills[i]

      if (this.player.isCollideWith(skill)) {
        this.player.addbuttle()
        skill.visible = false
        wx.showToast({ title: '获得双倍火力！' })
        break
      }
    }
    //获得血块
    for (let i = 0, il = databus.bloods.length; i < il; i++) {
      let blood = databus.bloods[i]

      if (this.player.isCollideWith(blood)) {
        blood.visible = false
        if (databus.hp<3){
          wx.showToast({ title: '获得生命回复！' })
          databus.hp += 1
        }
        break
      }
    }

    /**游戏失败 */
    for ( let i = 0, il = databus.enemys.length; i < il;i++ )
     {
      let enemy = databus.enemys[i]

      if ( this.player.isCollideWith(enemy) ) 
      {
        enemy.playAnimation()
        that.music.playExplosion()
        databus.hp -= 1
        if (databus.hp<=0)  databus.gameOver = true
        break
      }
    }
    for (let i = 0, il = databus.bossbullets.length; i < il; i++) //被敌人子弹打到
     {
      let enemy = databus.bossbullets[i]
      if (this.player.isCollideWith(enemy))
       {
        //enemy.playAnimation()
        that.music.playExplosion()
        databus.hp -= 1
        enemy.visible=false;
        if (databus.hp <= 0) databus.gameOver = true
        break
      }
    }
    for (let i = 0, il = databus.sboss.length; i < il; i++) {
      let sboss = databus.sboss[i]

      if (this.player.isCollideWith(sboss)) {
        sboss.playAnimation()
        that.music.playExplosion()
        databus.hp -= 1
        databus.removeSBoss(sboss)
        if (databus.hp <= 0) databus.gameOver = true
        break
      }
    }
  }

  //游戏结束后的触摸事件处理逻辑
  
  touchEventHandler(e) 
  {
     e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    //获取结束时按钮面板信息
    let area = this.gameinfo.btnArea_restart
    let area_mean = this.gameinfo.btnArea_remean
    //按钮事件监听
    if (   x >= area.startX
        && x <= area.endX
        && y >= area.startY
        && y <= area.endY  )
      this.restart()
    if (x >= area_mean.startX
      && x <= area_mean.endX
      && y >= area_mean.startY
      && y <= area_mean.endY)
      {
        canvas.removeEventListener(
         'touchstart',
          this.touchHandler
        )
        new Menu()
      }
      
    }

    /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
    render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)

    databus.bullets
           .concat(databus.enemys)
           .concat(databus.skills)
           .concat(databus.bloods)
           .concat(databus.sboss)
           .concat(databus.bossbullets)
           .forEach((item) => {
              item.drawToCanvas(ctx)
            })

    this.player.drawToCanvas(ctx)

    databus.animations.forEach((ani) => {
      if ( ani.isPlaying ) {
        ani.aniRender(ctx)
      }
    })

    this.gameinfo.renderGameScore(ctx, databus.score)
    this.gameinfo.renderGameHp(ctx,databus.hp)
  }

  // 游戏逻辑更新主函数
  update() {
    this.bg.update()

    databus.bullets
           .concat(databus.enemys)
           .concat(databus.skills)
           .concat(databus.bloods)
           .concat(databus.bossbullets)
           .concat(databus.sboss)
           .forEach((item) => {
              item.update()
            })

    this.enemyGenerate()
    this.skillGenerate()
    this.bloodGenerate()
    this.collisionDetection()
    this.sbossGenerate()
  }

  // 实现游戏帧循环
  loop()
   {
       
       databus.frame++
       this.update()
       this.render()
       if (databus.frame % 20 === 0) {
         this.player.shoot()
         this.player.diffbuttle()
         this.music.playShoot()
         for (let i = 0, il = databus.sboss.length; i < il; i++) {
           //if (databus.sboss[i].IsDie()) continue;
           let num = Math.floor(Math.random() * 4) //0--3
           if (num == 1) {
             let sboss = databus.sboss[i]
             sboss.bossshoot()
             this.music.playboss()
           }
         }
       }
       // 游戏结束停止帧循环
       if (databus.gameOver) {
         this.gameinfo.renderGameOver(ctx, databus.score)
         this.music.playDie()
         this.music.stopBgm()
         this.touchHandler = this.touchEventHandler.bind(this)
         canvas.addEventListener('touchstart', this.touchHandler)
         return
       }
     
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}
