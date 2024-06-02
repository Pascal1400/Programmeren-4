import { Actor, Engine, Vector, Color, Resource, Sprite } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Wolken extends Actor {
    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Wolken,
            sourceView: { x: 0, y: 0, width: Engine.drawWidth, height: Engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += .02 * delta;
    }
}
