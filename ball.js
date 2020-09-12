class Ball {
    constructor(x,y,radius){
        var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}