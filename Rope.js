class Rope{

    constructor(bodyA,pointB){




    var options={
       bodyA:bodyA,
       pointB:pointB,
       length:500,
       stifness:0.4,
       restitution:0.8
    }


this.pointB=pointB;
this.bodyA=bodyA;
//this.pointX=bodyA.x;
//this.pointY=bodyA.y-250;
this.sling = Constraint.create(options)
World.add(world,this.sling)

}
display(){
if(this.sling.pointA){
    var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    push()
    strokeWeight(4)
    stroke("#E0DFE3")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}
}



fly(){
this.bodyA=null
}

}