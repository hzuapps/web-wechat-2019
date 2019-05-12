
import Animation from '../base/animation'
import DataBus from '../databus'

const SKILL_IMG_SRC = 'images/upbull.png'
const SKILL_WIDTH = 30
const SKILL_HEIGHT = 40

/** 速度初始 */
const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Getskill extends Animation {
  constructor() {
    super(SKILL_IMG_SRC, SKILL_WIDTH, SKILL_HEIGHT) //初始化技能
  }

  /** 速度值初始化 */
  init(speed) {
    this.x = rnd(0, window.innerWidth - SKILL_WIDTH)
    this.y = -this.height

    this[__.speed] = speed

    this.visible = true
  }

  // 每一帧更新敌人位置
  update() {
    this.y += this[__.speed]

    // 对象回收
    if (this.y > window.innerHeight + this.height)
      databus.removeSkill(this)
  }
}
