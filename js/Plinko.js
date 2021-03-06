class Plinko {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'isStatic':true
      }
      this.radius=10;
      this.body = Bodies.circle(x, y,this.radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y); 
      fill(255);
      ellipse(0, 0, 10, 10);
      pop();
    }
}