import { Actor, Engine, Vector, Color, Label, FontUnit, Font, DisplayMode, Scene } from "excalibur"
import { UI } from "./ui.js"
import { Background } from './background.js'
import { Wolken } from './wolken.js'
import { Bird } from './bird.js'
import { Egg } from './ei.js'

export class GameScene extends Scene {
    constructor() {
        super();
    }
    
    onInitialize(engine) {
        this.addUI();
        this.addBackground();
        this.addWolken();
        this.addBird();
        this.addEgg(); 
    }
  
    addEgg(engine) {
        let delay;
        let extraDelay = 0;

        for (let i = 0; i < 100; i++) {
            if (this.score < 50) {
                delay = Math.floor(Math.random() * 1500) + 1000; 
            } else {
                delay = Math.floor(Math.random() * 750) + 1000;
            }
            extraDelay += delay;
            setTimeout(() => {
                const egg = new Egg()
                this.add(egg)
            }, extraDelay)
        }
    }

    addBird() {
        const bird = new Bird()
        bird.on('collision', (evt) => {
            this.ui.updateScore()
        });
        this.add(bird)
    }

    addUI() {
        this.ui = new UI()
        this.add(this.ui)
    }

    addBackground() {
        let background = new Background()
        this.add(background)
    }

    addWolken() {
        let wolken = new Wolken()
        this.add(wolken)
    }
}
