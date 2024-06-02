import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Egg } from './ei.js'
import { GameScene } from './gameScene.js'

export class Bird extends Actor {
    constructor() {
        super({ width: 150, height: 100 })
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Bird,
            grid: { rows: 2, columns: 3, spriteWidth: 250, spriteHeight: 250 }
        })

        this.eggCount = 0;

        const idle = Animation.fromSpriteSheet(runSheet, range(0, 5), 100)
        const up = Animation.fromSpriteSheet(runSheet, range(0, 5), 125)
        const down = runSheet.sprites[2]
        const back = runSheet.sprites[3]
        const forward = Animation.fromSpriteSheet(runSheet, range(0, 5), 75)

        this.graphics.add("idle", idle)
        this.graphics.add("up", up)
        this.graphics.add("down", down)
        this.graphics.add("back", back)
        this.graphics.add("forward", forward)

        this.graphics.use(idle)
    }

    onInitialize(engine) {
        this.pos = new Vector(300, 300);
        this.vel = new Vector(0, 0);
        this.on('collisionstart', (event) => this.catchEgg(event))
    }

    onPreUpdate(engine) {
        this.scale = new Vector(0.9, 0.9)

        this.pos.x = clamp(this.pos.x, 25, 1220)
        this.pos.y = clamp(this.pos.y, 50, 670)

        let xspeed = 0;
        let yspeed = 0;
        this.graphics.use('idle')
        this.rotation = 0;

        if (engine.input.keyboard.isHeld(Keys.Up) || engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -200;
            this.rotation = -0.5;
            this.graphics.use('up')
        }

        if (engine.input.keyboard.isHeld(Keys.Down) || engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 400;
            this.rotation = 0.5;
            this.graphics.use('down')
        }

        if (engine.input.keyboard.isHeld(Keys.Left) || engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -400;
            this.rotation = -0.5;
            this.graphics.use('back')
        }

        if (engine.input.keyboard.isHeld(Keys.Right) || engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
            this.graphics.use('forward')
        }

        this.vel = new Vector(xspeed, yspeed);
    }

    catchEgg(event, engine) {
        if (event.other instanceof Egg) {
            event.other.kill();
            const gameScene = this.scene;
            if (gameScene instanceof GameScene) {
                gameScene.ui.updateScore();
                this.eggCount++;
                this.goToEndScene(gameScene.engine)
            }
        }
    }

    goToEndScene(engine) {
        if (this.eggCount === 2) {
            engine.goToScene('end')
        }
    }
}
