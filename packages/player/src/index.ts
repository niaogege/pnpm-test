class Player {
  public version;
  constructor() {
    this.version = "1.0.0";
  }
}

export default {
  player: new Player(),
  date: new Date(),
};

export const pkgName = "player";
