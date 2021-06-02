class Wall{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height)
        //this.image = loadImage('Wall.png')
        //this.body.addImage(this.image)
        this.body.shapeColor = 'brown'
    }
}