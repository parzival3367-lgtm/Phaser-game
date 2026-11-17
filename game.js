const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create() {
            this.add.text(100, 100, 'Hello Phaser!', { fill: '#ffffff' });
        }
    }
};

const game = new Phaser.Game(config);
