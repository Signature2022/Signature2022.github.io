// Inspiration from Class Demo taken from The Nature of Code by Daniel Shiffman in http://natureofcode.com
// Inspiration taken from example 1-2: Bouncing Ball, with p5.Vector

class MovingStar{
	constructor(){
	 	this.position = new createVector(100, 100); // initial vectors
    this.velocity = new createVector(2.5, 5);
	}
	
	 update() {
    // Adding speed to position.
    this.position.add(this.velocity);
    if ((this.position.x > 900) || (this.position.x < -100)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > 400) || (this.position.y < -100)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
	
	display(x,y){ // creating and displaying the star here
	
	noStroke();
	fill(215, 250, 246);
	triangle(this.position.x+ 110,this.position.y + 75,this.position.x + 95,this.position.y + 75, this.position.x + 105,this.position.y + 40);
	triangle(this.position.x +105,this.position.y + 70, this.position.x + 105,this.position.y + 85, this.position.x + 75, this.position.y + 80);
	triangle(this.position.x + 105,this.position.y + 70,this.position.x + 105,this.position.y + 85,this.position.x + 135,this.position.y + 80);
	triangle(this.position.x + 110,this.position.y + 75,this.position.x + 95,this.position.y + 75,this.position.x + 105, this.position.y + 125);
	
	}
	

}