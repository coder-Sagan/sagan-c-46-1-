class Board {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/board1.png");
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };