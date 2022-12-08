class Star{
	constructor(){
		
	}
	
	display(x,y,s){
	
		noStroke();
		fill(252, 232, 3);
		triangle(x+ 110,y + 75,x + 95,y + 75, x + 105,y + 40);
		triangle(x +105,y + 70, x + 105,y + 85, x + 75, y + 80);
		triangle(x + 105,y + 70,x + 105,y + 85,x + 135,y + 80);
		triangle(x + 110,y + 75,x + 95,y + 75,x + 105, y + 125);
		fill(252, 232, 3,90);
		ellipse(x + 105, y + 80, 50+s, 50+s);
		fill(252, 232, 3, 60);
		ellipse(x + 105, y + 80, 100+s, 100+s);
	
	}
	
}	