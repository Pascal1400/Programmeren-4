import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './startScene.js'
import { GameScene } from './gameScene.js';
import { GameOver } from './gameOver.js';
import { GameEnd } from './endScene.js'

export class Game extends Engine {
    constructor() {
        super({ width: 1280, height: 720 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new StartScene())
        this.add('game', new GameScene());
        this.add('gameOver', new GameOver())
        this.add('end', new GameEnd())
        
        this.goToScene('start')
    }
}

new Game()
