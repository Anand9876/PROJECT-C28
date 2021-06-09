class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
        }
     this.pointB=pointB;
     this.body=Constraint.create(options);
     World.add(world,this.body);   
    }
    fly(){
        this.body.bodyA=null;
    }
    Launch(bodyA){
        this.body.bodyA=bodyA;
    }
    attach(body){
        this.body.bodyA=body;
    }
    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position;
            var pointB= this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y-3);

            }else{
                strokeWeight(4);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                
            }
            pop();
        }
    }
}