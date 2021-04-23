class Bob{
    constructor(x, y,r) {

        var options = {
            'restitution':1.2,
            'friction':0.5,
            'density':0.7
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        eclipseMode(CENTER);
        circle(this.body, 0, 0, this.r);
        pop();
        
      }
    }