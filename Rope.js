class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

    console.log("in Rope class")
    this.offsetX=offsetX
    this.offsetY=offsetY
    var opt={bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}}
            this.rope=Constraint.create(opt)
            World.add(world,this.rope)


    }
 display(){
     var pointA=this.rope.bodyA.position
     var pointB=this.rope.bodyB.position
     strokeWeight(7)
     push()
     stroke("green")
     line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)  
     pop()
 
    }}