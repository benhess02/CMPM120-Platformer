class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    center(sprite) {
        sprite.x = (config.width - sprite.width) / 2;
    }

    create() {
        this.center(this.add.text(0, 200, "Game Over!",  { fontSize: 92, color: "red" }));
        this.center(this.add.text(0, 500, "Press space to play again...",  { fontSize: 48, color: "white" }));

        var scene = this.scene;

        this.input.keyboard.addKey("space").on("down", function() {
            scene.start("platformerScene");
        });
    }
}