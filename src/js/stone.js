import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Stone extends Actor {
    constructor() {
        super({ width: Resources.Stone.width, height: Resources.Stone.height })

        const stoneSprite = Resources.Stone.toSprite()
        this.graphics.use(stoneSprite)
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Active
        this.body.bounciness = 2
        
        const screenWidth = engine.drawWidth
        const buffer = 400;

        const randomX = Math.random() * (screenWidth - buffer) + buffer;

        this.scale = new Vector(0.08, 0.08)

        this.pos = new Vector(randomX, -20)
        this.vel = new Vector(Math.random() - 130, Math.random() * 5 + 5)
    }

    onPreUpdate(engine) {
        const fallSpeed = this.vel.y;
        const maxFallSpeed = 150;

        this.rotationSpeed = -0.01 - (fallSpeed / maxFallSpeed) * 0.01;

        this.rotation += this.rotationSpeed

        if (this.pos.y > engine.drawHeight) {
            this.kill()
        }
    }
}
