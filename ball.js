class Ball {
    constructor(x, y, r) {
      var ball_features = {
        restitution: 0.8,
        friction: 1,
        density: 1,
      };
      this.ball = Bodies.circle(x, y, r/2, ball_features);
      World.add(myWorld, this.ball);
      this.r = r;
     
    }
    display() {
      push();
      translate(this.ball.position.x, this.ball.position.y);
      rotate(this.ball.angle);
  
      ellipseMode(CENTER);
      ellipse( 0, 0, this.r);
      pop();
    }
  }
  