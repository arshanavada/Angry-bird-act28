class SlingShot{
    constructor(bodyA, mypointB){
        var options = {
            bodyA: bodyA,
            pointB: mypointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=mypointB;
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    flying(){
        this.sling.bodyA=null;
    }
}