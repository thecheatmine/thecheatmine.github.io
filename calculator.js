class map {
  constructor(duration, od, cs, sm, st, objects, circles, sliders, spinners, hitObjects, timingPoints){
    this.duration = duration;
    this.od = od;
    this.cs = cs;
    this.sm = sm;
    this.st = st;
    this.objects = objects;
    this.circles = circles;
    this.sliders = sliders;
    this.spinners = spinners;
    this.hitObjects = hitObjects;
    this.timingPoints = timingPoints;
  }

  getHitObjects(line){
    return "Ceci doit être un hitObject présent à la ligne 'line'";
  }

  getTimingPoints(line){
    return "Ceci doit être un timingPoints présent à la ligne 'line'";
  }
}

class current {
  constructor(angle, distance){
    this.angle = angle;
    this.distance = distance;
  }

  getAngle(x1,y1,x2,y2,x3,y3){
    let AB = Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2));    
    let BC = Math.sqrt(Math.pow(x2-x3,2)+ Math.pow(y2-y3,2)); 
    let AC = Math.sqrt(Math.pow(x3-x1,2)+ Math.pow(y3-y1,2));
    this.angle = Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
  }
}

  getDistance(x1,y1,x2,y2){
    this.distance = Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2));
  }
}

let currentTest = new current(0, 0);
currentTest.getDistance(200,400,300,500)
alert(currentTest.distance);

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