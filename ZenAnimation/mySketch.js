let Sr;
let Sr2;
let Sr3;
let Sr4;
let Ms;
let Cb;
let Cl;
s=0;
let Roman;
scene = 1;


function setup() {
	createCanvas(1000, 500);
	Roman = new Human();
	Sr = new Star();
	Sr2 = new Star(); // initializing up these classes
	Sr3 = new Star();
	Sr4 = new Star();
	Ms = new MovingStar();
	Cb = new CherryBlossom();
	Cl = new Cloud();
}

function draw() {
	for(z=0;z<100;z++){
			if(s<1000){
				background(0);
				s = s + 0.01;

			}
		}
	if (scene == 1) {	
	
		background(0);

		Sr.display(0,0,s); // stars
		Sr2.display(800,0,s);
		Sr3.display(800,300,s);
		Sr4.display(0,300,s);


		push();
		scale(0.5);
		Roman.display(-100,-150,100-s); // for all the roman clones the glow will first decrease and then increase
		Roman.display(-100,350,100-s);
		Roman.display(1110,-150,100-s);
		Roman.display(1110,350,100-s);
		scale(0.5);
		Roman.display(1500,-150,100-s);
		Roman.display(1500,1450,100-s);
		pop();



		Roman.display(0,-100,s);
		Ms.update();
		Ms.display();
	}
	
	else if (scene == 2) {
	
		background(255);
		
		noStroke();
		
		fill(3, 90, 252);
		rect(0,0,1000,300);
		fill(3, 7, 252);
		rect(0,20,1000,250);
		fill(61, 3, 252);
		rect(0,40,1000,200);
		fill(103, 3, 252);
		rect(0,60,1000,150);
		fill(157, 3, 252);
		rect(0,80,1000,100);
		fill(210, 3, 252);
		rect(0,100,1000,50);
		fill(252, 3, 248);
		rect(0,120,1000,50); // the sky gradient
		
		fill(122, 70, 18);
		rect(0,170,1000,150); // upper land surrounding waterfall 
		fill(146, 219, 9);
		rect(0,170,1000,15);
		
		fill(3, 148, 252);
		rect(0,300,1000,200);  // body of water
		rect(350,170,300,200); //waterfall	
		
		
		push();
		scale(0.25);
		Ms.update();
		Ms.display();
		translate(500,200); // dancing uniform stars
		Ms.display();
		translate(500,-200);
		Ms.display();
		translate(500,200);
		Ms.display();
		translate(500,-200);
		Ms.display();
		translate(500,200);
		Ms.display();
		translate(500,-200);
		Ms.display();
		pop();
		
		Cl.display(0,0); // clouds
		Cl.display(200,50);
		Cl.display(600,50);
		Cl.display(800,15);
		
		
		
		
		fill(122, 70, 18);
		triangle(0,300,0,500,350,300);
		triangle(1000,300,1000,500,650,300); // lower land surrounding river
		fill(146, 219, 9);
		triangle(0,300,0,475,325,300);
		triangle(1000,300,1000,475,675,300);
		
		
		Cb.display(0,75); //cherry blossoms 
		Cb.display(100,75); 
		Cb.display(200,75);
		Cb.display(600,75);
		Cb.display(700,75);
		Cb.display(800,75);
		Cb.display(900,75);
		Cb.display(150,250);
		Cb.display(60,300);
		Cb.display(-35,350);
		Cb.display(710,250);
		Cb.display(800,300);
		Cb.display(890,350);
		
		fill(102);
		ellipse(500,400,200,100); //boulder in river
		fill(3, 148, 252);
		rect(400,400,200,200); // water blocking boulder
		
		push();
		scale(0.5);
		Roman.display(500,300,-s);
		scale(0.25);
		Roman.display(4870,250,100);
		Roman.display(2000,950,-300);
		Roman.display(6700,2800,-300);
		translate(mouseX,mouseY);
		Roman.display(3250,-100,100);
		scale(8);
		Cl.display(400,25);
		
		pop();
		
		sh = random(-2,2); // shaking the vines to show wind
		strokeWeight(10);
		stroke(146, 219, 9); // left vines
		line(30,185,70+sh,300);
		line(90,185,25+sh,300);
		line(120,185,100+sh,300);
		line(160,185,140+sh,300);
		line(195,185,275+sh,300);
		line(330,185,275+sh,300);
		
		line(670,185,720+sh,300); // right vines
		line(720,185,870+sh,300);
		line(850,185,820+sh,300);
		line(915,185,915+sh,300);
		line(940,185,975+sh,300);
		
		
		
	}
	
	
	
	
}




function mousePressed(){

	print(mouseX); // mousepress for helping me with understanding the coordinates better
	print(mouseY);
	
	scene += 1;
			if (scene > 2) {
				scene = 1;
		}

}
