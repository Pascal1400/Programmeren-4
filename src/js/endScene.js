import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, Scene, Sprite } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { GameScene } from './gameScene.js'

export class GameEnd extends Scene {
    onInitialize(engine) {

        const gameEnd = new Actor({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
        });

        const gameEndSprite = Sprite.from(Resources.GameEnd)
        gameEnd.graphics.use(gameEndSprite)
        this.add(gameEnd);

        gameEnd.on('pointerup', () => {
            engine.removeScene('game')
            engine.add('game', new GameScene())
            engine.goToScene('start')
        });
    }
}