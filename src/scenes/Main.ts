export class Main extends Phaser.Scene {
  public static SCENE_KEY = 'Main';
  constructor() {
    super(Main.SCENE_KEY);
  }

  protected create(): void {
    // initialize your scene here
    this.add.circle(10, 10, 5, 0xff00ff);
  }
}
