class map {

}

class current {

}

class result {
  constructor(aim, tap, read){
    this.aim = aim;
    this.tap = tap;
    this.read = read;
  }

  changeAim(value){
    this.aim += value;
  }

  changeTap(value){
    this.tap += value;
  }

  changeRead(value){
    this.read += value;
  }
}