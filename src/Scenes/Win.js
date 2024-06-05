class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    center(sprite) {
        sprite.x = (config.width - sprite.width) / 2;
    }

    create() {
        this.center(this.add.text(0, 200, "You Win!",  { fontSize: 92, color: "green" }));
        this.center(this.add.text(0, 500, "Press space to play again...",  { fontSize: 48, color: "white" }));

        var scene = this.scene;

        this.input.keyboard.addKey("space").on("down", function() {
            scene.start("platformerScene");
        });
    }
}