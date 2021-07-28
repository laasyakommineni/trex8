var box1, box2

function setup(){
    createCanvas(400,400)

    box1 = new Box(100,200,20,20,2)

    box2 = new Box (200,200,20,20,2,2)
}

function draw(){
    background("white")

    box1.show()
    box1.move()

    box2.show()
    box2.move()
    box2.moveup()
}