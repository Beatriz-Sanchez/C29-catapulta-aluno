class Estilingue{
  constructor(bodyA, pointB){
   var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 5
    };

    this.imagem1 = loadImage("sprites/sling1.png");
    this.imagem2 = loadImage("sprites/sling2.png");
    this.imagem3 = loadImage("sprites/sling3.png");
    this.pointB = pointB;
    this.estilingue = Constraint.create(options);
    World.add(world, this.estilingue);
  }

  voar(){
    this.estilingue.bodyA = null;
  }

  display(){
    image(this.imagem1,200,20);
    image(this.imagem2,172,15);
    if (this.estilingue.bodyA) {
      var pointA = this.estilingue.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      // line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}