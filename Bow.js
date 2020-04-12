class Bow {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.1,
        length: 10
      }
      this.pointB = pointB
      this.image=loadImage("images/bow.png");
      this.image.scale=1.5;
      this.bow = Constraint.create(options);
      World.add(world, this.bow);
    }

    attach(body){
      this.bow.bodyA = body;
  }
  
  fly(){
      this.bow.bodyA = null;
  }

    display(){
      image(this.image,100,100);
        if(this.bow.bodyA){
            var pointA = this.bow.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 250) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
              //  image(this.image,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
               line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.image,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
    }
  }
}