import Sprite from '../base/sprite'
import DataBus from '../databus'

const BossBULLET_IMG_SRC = 'images/bossbu.png'
const BossBULLET_WIDTH = 20
const BossBULLET_HEIGHT = 34

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

export default class BoBullet extends Sprite {
  constructor() 
  {
    super(BossBULLET_IMG_SRC, BossBULLET_WIDTH, BossBULLET_HEIGHT)
   // this.initSMBAnimation()
  }

  init(x, y, speed) {
    this.x = x
    this.y = y

    this[__.speed] = speed

    this.visible = true
  }
  /*// 预定义爆炸的帧动画
  initSMBAnimation() {
    let frames = []

    const SMB_IMG_PREFIX = 'images/explosion'
    const SMB_FRAME_COUNT = 19

    for (let i = 0; i < SMB_FRAME_COUNT; i++) {
      frames.push(SMB_IMG_PREFIX + (i + 1) + '.png')
    }

    this.initFrames(frames)
  }*/
  // 每一帧更新子弹位置
  update() {
    this.y += this[__.speed]

    // 超出屏幕外回收自身
    if (this.y > window.innerHeight + this.height)
      databus.removeBoBullets(this)
  }
}
