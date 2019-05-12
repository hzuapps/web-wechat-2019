
import Animation from '../base/animation'
import DataBus from '../databus'

const BLOOD_IMG_SRC = 'images/blood.png'
const BLOOD_WIDTH = 60
const BLOOD_HEIGHT = 60

/** 速度初始 */
const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Blood extends Animation {
  constructor() {
    super(BLOOD_IMG_SRC, BLOOD_WIDTH, BLOOD_HEIGHT) //初始化技能
  }

  /** 速度值初始化 */
  init(speed) {
    this.x = rnd(0, window.innerWidth - BLOOD_WIDTH)
    this.y = -this.height

    this[__.speed] = speed

    this.visible = true
  }

  // 每一帧更新敌人位置
  update() {
    this.y += this[__.speed]

    // 对象回收
    if (this.y > window.innerHeight + this.height)
      databus.removeblood(this)
  }
}
