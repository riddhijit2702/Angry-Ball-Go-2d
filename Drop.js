class Drop {
    constructor(x,y){
this.x=x;
this.y=y;
this.r=4;
var options={
    'isStatic':false,
    'friction':0.5,
    'restitution':0.2
}
this.body=Bodies.circle(x,y,4,options)
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle
            push();
            translate(pos.x, pos.y);
            rotate(angle);
           ellipseMode(RADIUS)
            
            strokeWeight(4);
            fill("#1001B4");
            ellipse(0,0,this.r);
            pop();
        }
    }
  
   