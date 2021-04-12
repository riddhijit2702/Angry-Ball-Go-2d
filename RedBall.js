class RedBall{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'restitution':1,
            'friction':0.8
        }
        this.r=r;
        this.image = loadImage("redBall.png");
        this.body=Bodies.circle(x,y,this.r,options)
      
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
  
}