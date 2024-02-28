class CircleR
{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    Circle(){
        console.log("This is circle")
    }
    Circle(radius){
        console.log("This is radius of circle")
    }
    Circle(radius,color){
        console.log("Radius & Color of circle after method overriding:",this.radius,this.color)
    }
    getRadius(){
        console.log("Radius of circle :",this.radius)
    }
    setRadius(newRadius){
        this.radius=newRadius
    }
    getColor(){
        console.log("Color of circle :",this.color)
    }
    setColor(newColor){
        this.color=newColor
    }
    getArea(){
        console.log("Area of circle :" +(Math.PI*Math.pow(this.radius,2)))
    }
    getCircumference(){
        console.log("Circumference of circle :"+(2*Math.PI*this.radius))
    }
}
var circle1=new CircleR(2,"red")
circle1.setColor("Blue")
circle1.getColor()
circle1.getArea()
circle1.setRadius(1.0)
circle1.getRadius()
// circle1.getCircumference()
//circle1.Circle()