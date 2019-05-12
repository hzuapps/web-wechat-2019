import Animation from '../base/animation'
import DataBus from '../databus'
import BoBullet from './BoBullet'

const SMB_IMG_SRC = 'images/boss.png'
const SMB_WIDTH = 80
const SMB_HEIGHT = 80

/** 速度初始 */
const __ = {
  speed: Symbol('speed')
}


let databus = new DataBus()
//let isdie=false

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class SBoss extends Animation {
  constructor() {
    super(SMB_IMG_SRC, SMB_WIDTH, SMB_HEIGHT)
    this.initSMBAnimation()
  }

  /** 速度值初始化 */
  init(speed) {
    this.x = rnd(0, window.innerWidth - SMB_WIDTH)
    this.y = -this.height

    this[__.speed] = speed

    this.visible = true
  }

  // 预定义爆炸的帧动画
  initSMBAnimation() {
    let frames = []

    const SMB_IMG_PREFIX = 'images/explosion'
    const SMB_FRAME_COUNT = 19

    for (let i = 0; i < SMB_FRAME_COUNT; i++) {
      frames.push(SMB_IMG_PREFIX + (i + 1) + '.png')
    }

    this.initFrames(frames)
  }

  // 每一帧更新敌人位置
  update() {
    this.y += this[__.speed]

    // 对象回收
    if (this.y > window.innerHeight + this.height)
      databus.removeSBoss(this)
  }
  bossshoot() //敌人攻击
  {
    let bullet = databus.pool.getItemByClass('bobullet', BoBullet)
    bullet.init //初始化子弹
      (
      this.x + this.width / 2 - bullet.width / 2,
      this.y + 20,
      10
      )
    databus.bossbullets.push(bullet)
  }
}
