class SlingShot{
    constructor(a,b){
       var options={
           bodyA : a,
           pointB : b,
           stiffness: 0.004,
       }
       this.slingshot = Constraint.create(options);
       this.b = b;
       World.add(world,this.slingshot);
    }

     fly(){
       this.slingshot.bodyA = null;
     }

     attatch(){
        this.slingshot.bodyA = stoneObj.body;
     }

     display(){
        if(this.slingshot.bodyA){
        var posa = this.slingshot.bodyA.position;
        var posb = this.b;
        strokeWeight(1);
        line(posa.x,posa.y,posb.x,posb.y);
        }
     }
}