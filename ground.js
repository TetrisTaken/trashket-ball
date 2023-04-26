
class Ground{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.options = {
            isStatic:true
        }

        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,this.options)
        World.add(world,this.body)

    }
display(){
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
}
