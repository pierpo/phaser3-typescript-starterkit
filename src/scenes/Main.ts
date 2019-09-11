export class Main extends Phaser.Scene {
  public static SCENE_KEY = 'Main';
  constructor() {
    super(Main.SCENE_KEY);
  }

  protected create(): void {
    // initialize your scene here
    this.add.circle(200, 200, 50, 0xff0faf);
    this.add.circle(100, 150, 20, 0xffaaaa);
    this.add.circle(300, 100, 25, 0xaf0bb0);
  }
}
