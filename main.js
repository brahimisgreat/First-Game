import './style.css'
import Phaser from 'phaser'
import bg from './public/assets/bg.png'

const sizes={
  width:500,
  height:500
}
const speedDown=300

class GameScene extends Phaser.Scene{
  constructor(){
    super('scene-game')
  }

  preload(){
    this.load.image('bg','/assets/bg.png')
  }
  create(){
    this.add.image(250,250,'bg')
  }
  update(){}

    
}

const config = {
  type:Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas:gameCanvas,
  Physics:{
    default:'arcade',
    arcade:{
      gravity:{y:speedDown},
      debug:false
    }
},
scene:[GameScene]
}


const game = new Phaser.Game(config)