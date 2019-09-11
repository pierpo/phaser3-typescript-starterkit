import { Main } from './Main';

export class Preloader extends Phaser.Scene {
  protected preload(): void {
    this.load.image('bee', 'assets/bee.png');
  }

  protected create(): void {
    this.scene.launch(Main.SCENE_KEY);
  }
}
