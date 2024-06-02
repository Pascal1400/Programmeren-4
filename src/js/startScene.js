import { Actor, Engine, Vector, Color, Resource, Keys, SpriteSheet, Animation, range, clamp, Scene, Sprite } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { GameScene } from './gameScene.js';

export class StartScene extends Scene {  
    onInitialize(engine) {
        const startScreen = new Actor({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
        });
        
        const startScreenSprite = Sprite.from(Resources.StartScreen)
        startScreen.graphics.use(startScreenSprite)

        this.add(startScreen);

        startScreen.on('pointerup', () => {
            engine.goToScene('game')
        });
    }  
}