class MovingSprite{
	constructor(){
	 	this.position = new createVector(100, 100); // initial vectors
    this.velocity = new createVector(15, 2);
	}
	
	 update() {
    // Adding speed to position.
    this.position.add(this.velocity);
    if ((this.position.x > 150) || (this.position.x < -230)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > 100) || (this.position.y < -100)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
	
	run(x,y){
		// creating image & setting up for next scene if clicked correct & setting up what happens if clicked wrong 
		image(x,this.position.x,this.position.y,1000,500);

		
		if((mouseX -370> this.position.x) && (mouseX < this.position.x+700) && (mouseIsPressed) ){
				option = y ;
				}
		if((mouseX -370< this.position.x) && (mouseIsPressed) || (mouseX > this.position.x+700) && (mouseIsPressed) ){
				wrong.play();
				}
		
	
	
	}
	
	rin(x,y){
		// creating image & setting up for next scene if clicked correct & setting up what happens if clicked wrong 
		image(x,this.position.x,this.position.y,1000,500);

		
		if((mouseX -420> this.position.x) && (mouseX < this.position.x+550) && (keyIsPressed) ){
				option = y ;
				}
		if((mouseX -420< this.position.x) && (mouseIsPressed) || (mouseX > this.position.x+550) && (keyIsPressed) ){
				wrong.play();
				}
	}
	
	ran(x,y){
		// creating image & setting up for next scene if clicked correct & setting up what happens if clicked wrong 
		image(x,this.position.x,this.position.y,1000,500);

		
		if((mouseX -420> this.position.x) && (mouseX < this.position.x+800) && (keyIsPressed) ){
				option = y ;
				}
		if((mouseX -420< this.position.x) && (mouseIsPressed) || (mouseX > this.position.x+550) && (keyIsPressed) ){
				wrong.play();
				}
	}
	
	display(x){ // displaying the sprite here
	
			
	
	}
	

}