export class AutoUbt {
  public version;
  constructor() {
    this.version = "0.0.1";
  }
}

export default {
  version: "1.0.0",
  bindUbt() {
    return "this is test";
  },
  autoUbt: new AutoUbt(),
  name: "auto-ubt",
  date: new Date(),
  debugger: false,
};
