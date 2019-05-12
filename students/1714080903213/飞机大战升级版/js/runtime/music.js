let instance //变量定义

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this
/**音效 */
    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src  = 'audio/bgm.mp3'

    this.shootAudio     = new Audio()
    this.shootAudio.src = 'audio/bullet.mp3'

    this.boomAudio     = new Audio()
    this.boomAudio.src = 'audio/boom.mp3'

    this.dieAudio = new Audio()
    this.dieAudio.src = 'audio/die.mp3'

    this.menuAudio = new Audio()
    this.menuAudio.loop = true
    this.menuAudio.src = 'audio/menu.mp3'

    this.bossAudio = new Audio()
    this.bossAudio.src = 'audio/bossbuttle.mp3'

    this.playBgm()
  }

  playBgm() 
  {
    this.bgmAudio.currentTime = 0
    this.bgmAudio.play()
    this.dieAudio.pause()
    this.menuAudio.pause()
  }
  playmenu() //播放菜单音乐
  {
    this.menuAudio.currentTime = 0
    this.menuAudio.play()
    this.bgmAudio.pause()
    this.dieAudio.pause()
  }
  stopBgm()
  {
    this.bgmAudio.pause()
  }

  playShoot() {
    this.shootAudio.currentTime = 0
    this.shootAudio.play()
  }
  playboss()
  {
    this.bossAudio.currentTime = 0
    this.bossAudio.play()
  }

  playExplosion() {
    this.boomAudio.currentTime = 0
    this.boomAudio.play()
  }

  playDie() {
    this.dieAudio.currentTime = 0
    this.dieAudio.play()
  }
}
