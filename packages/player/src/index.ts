class Player {
  public version;
  constructor() {
    this.version = "1.0.0";
  }
}

export default {
  player: new Player(),
};

export const pkgName = "player";
