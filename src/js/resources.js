import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    StartScreen: new ImageSource('images/startScreen.jpg'),
    Background: new ImageSource('images/background.jpg', {wrapping: ImageWrapping.Repeat}),
    Wolken: new ImageSource('images/wolken.png', { wrapping: ImageWrapping.Repeat }),
    Bird: new ImageSource('images/vogel.png'),
    Egg: new ImageSource('images/ei.png'),
    GameOver: new ImageSource('images/GameOver.jpg'),
    GameEnd: new ImageSource('images/GameEnd.jpg')
}
const ResourceLoader = new Loader([
    Resources.StartScreen,
    Resources.Background,
    Resources.Wolken,
    Resources.Bird,
    Resources.Egg,
    Resources.GameOver,
    Resources.GameEnd
])

export { Resources, ResourceLoader }
