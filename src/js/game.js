import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './startScene.js'
import { GameScene } from './gameScene.js';
import { GameOver } from './gameOver.js';
import { GameEnd } from './endScene.js'

const options = { 
        width: 1280, 
        height: 720, 
        physics: { 
            solver: SolverStrategy.Realistic,
            gravity: new Vector(0, 100),
        }   
    }

export class Game extends Engine {
    constructor() {
        super(options)
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
