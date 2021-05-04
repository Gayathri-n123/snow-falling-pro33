class Snow{

    constructor(x,y){

        var options={
            restitution:0.5,
            friction:1,
            
        }

     this.body=Bodies.circle(x,y,10,options);
     this.image=loadImage("snow4.webp");
     this.r=10;
     World.add(world,this.body)
    }

    display(){
      
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
      //translate(pos.x,pos.y);
     // rotate(angle)
      imageMode(CENTER);
      fill("white");
     image(this.image,pos.x,pos.y,50,50)
      pop();
      


    }
}