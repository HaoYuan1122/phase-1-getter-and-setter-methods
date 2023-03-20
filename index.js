// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
         return this.radius*2
    }
    get circumference(){
         return this.radius*2*Math.PI
    }
    get area(){
         return  this.radius* this.radius*Math.PI
    }

    set diameter(newDiameter){
        return this.radius=newDiameter/2
    }
    set circumference(newCir){
        return this.radius=newCir/2/Math.PI
    }
    set area(newArea){
        return this.radius=Math.sqrt(newArea/Math.PI)
    }

}

let circle=new Circle(2)
console.log(circle.diameter)
