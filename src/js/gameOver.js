import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, Scene, Sprite } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { GameScene } from './gameScene.js'

export class GameOver extends Scene {
    onInitialize(engine) {
        const gameOver = new Actor({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
        });

        const gameOverSprite = Sprite.from(Resources.GameOver)
        gameOver.graphics.use(gameOverSprite)
        this.add(gameOver);

        gameOver.on('pointerup', () => {
            engine.removeScene('game')
            engine.add('game', new GameScene())
            engine.goToScene('game')
        });
    }
}