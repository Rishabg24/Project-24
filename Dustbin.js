class dustbin {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
    
     
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      rectMode(CENTER);
      fill("red");
      stroke("green");
      strokeWeight(4);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  