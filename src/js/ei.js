import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Egg extends Actor {
    constructor() {
        super({ width: Resources.Egg.width, height: Resources.Egg.height })
        
        const eggSprite = Resources.Egg.toSprite()
        this.graphics.use(eggSprite)
    }

    onInitialize(engine) {
        const screenWidth = engine.drawWidth
        const buffer = 400;

        const randomX = Math.random() * (screenWidth - buffer) + buffer;
        
        this.scale = new Vector(0.08, 0.08)

        this.pos = new Vector(randomX, 0)
        this.vel = new Vector(Math.random() -130, Math.random() * 150 + 140)
    }

    onPreUpdate(engine) {
        const fallSpeed = this.vel.y;
        const maxFallSpeed = 150;

        this.rotationSpeed = -0.01 - (fallSpeed / maxFallSpeed) * 0.01;

        this.rotation += this.rotationSpeed

        if (this.pos.y > engine.drawHeight) {
            engine.goToScene('gameOver',)
        } 
    }
}