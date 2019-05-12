import Pool from './base/pool'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()

    this.reset()
  }
  
  reset() {
    this.frame      = 0
    this.score      = 0
    this.hp=3
    this.bossbullets = []
    this.bullets    = []
    this.sboss = []
    this.enemys     = []
    this.animations = []
    this.bloods = []
    this.skills = []
    this.gameOver   = false
    //this.ismenu=false
  }
 /* remenu()
  {
    this.frame = 0
    this.score = 0
    this.hp = 3
    this.bossbullets = []
    this.bullets = []
    this.sboss = []
    this.enemys = []
    this.animations = []
    this.bloods = []
    this.skills = []
    this.gameOver = false
    this.ismenu=true
  }*/

  /**
   * 回收敌人，进入对象池
   * 此后不进入帧循环
   */
  removeEnemey(enemy)
   {
    let temp = this.enemys.shift()

    temp.visible = false

    this.pool.recover('enemy', enemy)
  }
  removeSBoss(sbos) {
    let temp = (sbos === undefined) ? this.sboss.shift()
      : this.sboss.splice(this.sboss.indexOf(sbos), 1)
    //let temp = this.sboss.shift()

    temp.visible = false

    this.pool.recover('sboss', sbos)
  }
  removeSkill(skill) 
  {
    let temp = this.skills.shift()

    temp.visible = false

    this.pool.recover('skill', skill)
  }
  removeblood(blood) {
    let temp = this.bloods.shift()

    temp.visible = false

    this.pool.recover('blood', blood)
  }

  /**
   * 回收子弹，进入对象池
   * 此后不进入帧循环
   */
  removeBullets(bullet) {
    /*let temp = this.bullets.shift()

    temp.visible = false

    this.pool.recover('bullet', bullet)*/

    //let temp = this.bullets.shift()  //原版的简化处理
    let temp = (bullet === undefined) ? this.bullets.shift()
      : this.bullets.splice(this.bullets.indexOf(bullet), 1)
    temp.visible = false
    this.pool.recover('bullet', bullet)
  }
  removeBoBullets(bobu) 
  {
    let temp = (bobu === undefined) ? this.bossbullets.shift()
      : this.bossbullets.splice(this.bossbullets.indexOf(bobu), 1)
    temp.visible = false
    this.pool.recover('bobu', bobu)
  }
}
