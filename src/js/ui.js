import { Actor, Engine, Vector, Color, Label, FontUnit, Font, DisplayMode, Scene, ScreenElement } from "excalibur"
import { GameOver } from "./gameOver";

export class UI extends ScreenElement {
    score = 0;
    highestScore = 0;

    onInitialize(engine) {
        this.loadScores();
        this.highScore();
        this.currentScore();
    }

    currentScore() {
        this.labelCurrent = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 75),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.addChild(this.labelCurrent)
    }

    highScore() {
        this.labelHighScore = new Label({
            text: `Highest Score: ${this.highestScore}`,
            pos: new Vector(100, 125),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.addChild(this.labelHighScore)
    }

    updateScore() {
        if (!this.labelCurrent) {
            return;
        }

        this.score++;
        this.labelCurrent.text = `Score: ${this.score}`;
        
        
        if (this.score > this.highestScore) {
            this.highestScore = this.score
            if (this.labelHighScore) {
                this.labelHighScore.text = `Highest Score: ${this.highestScore}`
                this.saveHighestScore()
            }
        }
    }

    saveHighestScore() {
        localStorage.setItem('highestScore', this.highestScore.toString())
    }

    loadScores() {
        const storedScore = localStorage.getItem('highestScore');

        if (storedScore !== null) {
            this.highestScore = parseInt(storedScore, 10)
        }
    }
}