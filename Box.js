class Box{
    constructor(x,y){
    
    var options = {
    isStatic:true
   
    
    }
    
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    
    
    }
    
    display(){
    var boxpos=this.body.position;
    
    push()
    translate(boxpos.x,boxpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    image(this.image,this.x,this,y,this.width,this.height)
    pop()
    
    
    }
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    