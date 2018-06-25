class Ts {
  private name: String;
  constructor(name) {
    this.name = name;
  }
  toString () {
    console.log(this.name);
  }
}


const ts = new Ts('whirring');

ts.toString();
