let song;
let wrong;
option = 0;

function preload(){ // loading everything
	bubblefont = loadFont("SnigletRegular.otf");
	coconutfont = loadFont("Monofett-Regular.ttf");
	song = loadSound("FireHouseRock12.mp3");
	wrong = loadSound("wrong.mp3");
	

}

function setup() {
	MS= new MovingSprite();
	CO = new MovingSprite();
	SB = new MovingSprite();
	song.loop()
	song.play();  // beach music
	
	createCanvas(1000,500);
	background(255);
	beach = loadImage('beachhousev2.jpeg'); // loading all my images
	hut = loadImage('hut.PNG');
	surfer = loadImage('surfer.PNG');
	coconut = loadImage('coconut.PNG');
	fire = loadImage('fire.PNG');
	stake = loadImage('stake.png');
	angrycrab = loadImage('angrycrab.png');
	dinner = loadImage('dinner.png');
	hutt = loadImage('hutt.jpg');
	deadcrab = loadImage('deadcrab.png');
	sun = loadImage('sun.png');
	palm = loadImage('palmtrees.jpg');
	hand = loadImage('hand.png');
	coco = loadImage('coco.png');
	cocodrink = loadImage('cocodrink.png');
	shark = loadImage('shark.png');
	ocean = loadImage('ocean.jpg');
	jellyfish = loadImage('jellyfish.png');
	s = loadImage('swimmingsurfer.png');
	surfboard = loadImage('surfboard.png');
	surfsup = loadImage('surfsup.png');
	
}

function draw() {
	if(option == 0) { // home screen
		
		image(beach, 0, 0, 1000, 500);
		image(hut,-40,random(-5,0),1000,500);
		image(surfer,random(-40,-38), random(-5,-3),1000,500);
		image(coconut,random(-40,-45),0,1000,500);
		fill(191,162,119);
		textFont(coconutfont,50);
		text('The Beach Museum', 300, 50);
		text('Click one of the three moving objects',25,490);
		
		if( mouseX > 130 && mouseX <237 && mouseY >300 && mouseY <380 && mouseIsPressed) {
		option = 1; // here is what happens if the hut is clicked
		
	}
		if( mouseX > 475 && mouseX <570 && mouseY >125 && mouseY <180 && mouseIsPressed) {
		option = 3; // here is what happens if the coconut is clicked
		
		}
		if( mouseX > 770 && mouseX <890 && mouseY >340 && mouseY <400 && mouseIsPressed) {
		option = 5; // here is what happens if the surfer is clicked
		
		}
	}
	
	if (option == 1) {
		
		
		
		image(hutt,0,0,1000,500);
		image(fire,0,random(0,3),1000,500);
			push();
				translate(mouseX-570,0);
				image(stake,0,0,1000,500);
			pop();
		
		MS.update();
		MS.run(angrycrab,2); // click to win
		MS.display();
		
		fill(255);
		rect(330, 10, 370, 50, 10);
		fill(255,0,0);
		textFont(coconutfont,50);
		text('Kill the Crab', 350, 50);
		
		fill(255)
		rect(70, 440, 200, 25, 10);
		fill(255,0,0);
		textFont(bubblefont,20);
		text('Click To Catch',75,460);
		
		fill(255);
		rect(70, 470, 850, 25, 10);
		fill(255,0,0);
		textFont(bubblefont,20);
		text('Fun Fact: the Jaiba de Rio is a freshwater crab native to the carribean',75,490);
		

	}
	
	if (option == 2) {
	
		image(hutt,0,0,1000,500);
		image(fire,0,random(0,3),1000,500);
		image(deadcrab,mouseX-570,0,1000,500);
		
		fill(255);
		rect(230, 10, 520, 50, 10);
		fill(255,0,0);
		textFont(coconutfont,50);
		text('Win! We Have Dinner', 250, 50);
		
		fill(255);
		rect(280, 470, 450, 25, 10);
		fill(255,0,0);
		textFont(bubblefont,20);
		text('Click any key to go back to home',300,490);
		
		if (keyIsPressed) {
				option = 0;
		}
		
	}
	if (option == 3) {
	
		image(palm,0,0,1000,500);
		
		image(hand,mouseX-500,0,1000,500);
		
		CO.update();
		CO.rin(coco,4); // press key to win
		CO.display();
		
		fill(255);
		rect(180, 10, 745, 50, 10);
		fill(191,162,119);
		textFont(coconutfont,50);
		text('Catch the bouncing coconut!', 200, 50);
		
		fill(255)
		rect(160, 440, 350, 25, 10);
		fill(191,162,119);
		textFont(bubblefont,20);
		text('Press Any Key To Catch',180,460);
		
		fill(255);
		rect(160, 470, 650, 25, 10);
		fill(191,162,119);
		textFont(bubblefont,20);
		text('Fun Fact: falling coconuts kill 150 people every year',180,490);
		
		scale(0.5);
		translate(150, 150);
		rotate(radians(frameCount));
		image(sun,-150,-70,1000,500); // rotating sun
		
		
		
	}
	if (option == 4) {
		background(0);
		image(palm,0,0,1000,500);
		image(cocodrink,mouseX-500,0,1000,500);
		
		fill(255);
		rect(230, 10, 540, 50, 10);
		fill(191,162,119);
		textFont(coconutfont,50);
		text('Win! We Have Drinks!', 250, 50);
		
		fill(255);
		rect(330, 470, 330, 25, 10);
		fill(191,162,119);
		textFont(bubblefont,20);
		text('Click to go back to home',350,490);
		
		if (mouseIsPressed) {
				option = 0;
		}
		
		scale(0.5);
		translate(150, 150);
		rotate(radians(frameCount));
		image(sun,-150,-70,1000,500); // rotating sun*/

	}
	if (option == 5){
		image(ocean,0,0,1000,500);
		image(jellyfish,random(-1,1),0,1000,500);
		image(s,mouseX-500,0,1000,500);
		
		fill(255);
		rect(180, 10, 600, 50, 10);
		fill(77,225,255);
		textFont(coconutfont,50);
		text('Catch your surfboard!', 200, 50);
		
		SB.update();
		SB.ran(surfboard,6); // key press to win
		SB.display();
		
		fill(255);
		rect(160, 470, 680, 25, 10);
		fill(77,225,255);
		textFont(bubblefont,20);
		text('Fun Fact: surfing is one of the oldest sports on earth!',180,490);
		
		fill(255)
		rect(160, 440, 350, 25, 10);
		fill(77,225,255);
		textFont(bubblefont,20);
		text('Press Any Key To Catch',180,460);
		
		
		scale(0.5);
		translate(400, 700);
		rotate(radians(frameCount));
		image(shark,-300,-300,1000,500); // rotating shark
	}
	if (option == 6){
	
		image(ocean,0,0,1000,500);
		image(jellyfish,random(-1,1),0,1000,500);
		image(surfsup,mouseX-500,0,1000,500);
		
		fill(255);
		rect(280, 160, 380, 50, 10);
		fill(77,225,255);
		textFont(coconutfont,50);
		text('Win! Surfs up!', 300, 200);
		
		fill(255);
		rect(330, 470, 330, 25, 10);
		fill(77,225,255);
		textFont(bubblefont,20);
		text('Click to go back to home',350,490);
		
		if (mouseIsPressed) {
				option = 0;
		}
		
		scale(0.5);
		translate(400, 700);
		rotate(radians(frameCount));
		image(shark,-300,-300,1000,500); // rotating shark
	
	}
}

function mousePressed(){

	print(mouseX); // mousepress for helping me with understanding the coordinates better
	print(mouseY);
	
	
		}