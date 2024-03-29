class Connection {
  constructor(a, b) {
    var connection_featurs = {
      bodyA: a,
      pointB: b,
      stiffness: 0.04,
      length: 300,
    };
    this.c = Constraint.create(connection_featurs);
    World.add(myWorld, this.c);
  }
  display() {
    if (this.c.bodyA != null) {
      var a = this.c.bodyA.position;
      var b = this.c.pointB;
      push();
      line(a.x, a.y, b.x, b.y);
      pop();
    }
  }
  break() {
    this.c.bodyA = null;
  }
}
