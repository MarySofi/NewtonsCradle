class roof {
    constructor(x,y,width,height) {
        var options = {
          'isStatic': true,
        }
        this. body= Bodies.rectangle(pos.x,pos.y,this.width,this.height);
        World.add(world, this.body) ;
    }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill(255);
            rect(pos.x,pos.y,this.width,this.height);
        }
}