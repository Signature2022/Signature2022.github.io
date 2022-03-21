
void setup(){
size(1000,1000);
background(250);
noStroke();
  fill(207, 30, 247);
  rect(0,0,500,500);
  fill(247, 164, 30);
  rect(500,0,500,500);
  fill(255, 3, 3);
  rect(0,500,500,500);
  fill(163, 117, 47);
  rect(500,500,500,500); // set up with four different colored rectangles as background
}

void draw(){  
  if (keyPressed == true) {
  noStroke();
  fill(207, 30, 247);
  rect(0,0,500,500);
  fill(247, 164, 30);
  rect(500,0,500,500);
  fill(255, 3, 3);
  rect(0,500,500,500);
  fill(163, 117, 47);
  rect(500,500,500,500);
    } // when any key is pressed then the screen is cleared
  
  if (mousePressed == true) {
  
      if(mouseX<500 && mouseY < 500){
      pushMatrix();
      translate(mouseX-25, mouseY-40);
      scale(0.05);
      for(int j = 0; j <7; j++){
        translate(mouseY + 600, mouseX + 600);
        for ( int i = 0; i < 5; i++) {
          rotate(radians(90));
          firstPattern();

        }
      }
      popMatrix();
    } //top left corner brush
    
    if(mouseX>500 && mouseY < 500){
      pushMatrix();
      translate(mouseX-25, mouseY-40);
      scale(0.01);
      for(int j = 0; j < 8; j++){
        translate(0,1000);
        rotate(radians(45));
        for ( int i = 0; i < 36; i++) {
          rotate(radians(10));
          translate(0,500);
          secondPattern();

        }
      }
      popMatrix();
    }// top right corner brush
    
    if(mouseX<500 && mouseY > 500){
      pushMatrix();
      translate(mouseX-25, mouseY-40);
      scale(0.1);
      for(int j = 0; j <10; j++){
        rotate(radians(j*10));
          for ( int i = 0; i < 6; i++) {
            rotate(radians(60));
            thirdPattern();

          }
      }
      popMatrix();
    } // bottom left brush
    
    if(mouseX>500 && mouseY > 500){
      pushMatrix();
      translate(mouseX-25, mouseY-40);
      scale(0.05);
      for(int j = 0; j < 8; j++){
        translate(0,1000);
        rotate(radians(45));
        for ( int i = 0; i < 36; i++) {
          rotate(radians(10));
          fourthPattern();

        }
      }
      popMatrix();
    }// bottom right brush
    
  
  }
}

void firstLetter( int x,int y){

strokeWeight(15);
line(100+x,100+y,100+x,50+y);
line(75+x,50+ y,125+ x, 50+y);
line(75+x,100+y,100+x,100+y);
line(75+x,100+y,75+x,75+y);
  // the letter J
}

void secondLetter(int x, int y){

strokeWeight(15);
line(100+x,100+y,100+x,50+y);
line(75+x,50+ y,125+ x, 50+y);
line(75+x,100+y,100+x,100+y);
line(75+x,100+y,75+x,50+y);
  // the letter O but fancy
}

void thirdLetter(int x,int y){

strokeWeight(15);
line(75+x,75+y,112+x,75+y);
line(75+x,50+ y,125+ x, 50+y);
line(75+x,100+y,100+x,100+y);
line(75+x,100+y,75+x,50+y);
  // the letter E
}

void fourthLetter(int x, int y){

strokeWeight(15);
line(100+x,100+y,100+x,75+y);
line(75+x,50+ y,100+ x, 75+y);
line(125+x,50+y,100+x,75+y);
  // the letter Y
}

void firstPattern(){

  
  for (int y = 0; y < 700; y += 100) {
       for (int x = 0; x < 700; x += 100){
        stroke(252, 152, 3); // orange 
        firstLetter(x,y);
        if (x > 0 && x < 600 && y > 0 && y < 200) {
          stroke(207, 30, 247); // purple , here I am erasing the top line of for the letter J in the grid
          firstLetter(x,y);
        
        }
        if (x >= 0 && x < 600 && y > 100 && y < 300) {
          stroke(252, 57, 3); // dark orange , adding shade to the top line of for the letter J in the grid
          firstLetter(x,y);
        
        }
        if (x >= 0 && x < 100 && y > 0 && y < 300) {
          stroke(252, 57, 3); // dark orange , adding shade to the top left line of for the letter J in the grid
          firstLetter(x,y);
        
        } 
          if (x > 200 && x < 400 && y > 0 && y < 600) {
          stroke(207, 30, 247); // purple , here I am erasing the middle line of for the letter J in the grid
          firstLetter(x,y);
        
        }
        if (x > 100 && x < 300 && y > 200 && y < 600) {
          stroke(252, 57, 3); // dark orange , adding shade to the middle line of for the letter J in the grid
          firstLetter(x,y);
        
        }
         if (x > 50 && x < 400 && y > 400 && y < 600) {
          stroke(207, 30, 247); // purple , here I am erasing the bottom line of for the letter J in the grid
          firstLetter(x,y);
        
        }
        if (x >= 0 && x < 400 && y > 500 && y < 700) {
          stroke(252, 57, 3); // dark orange , adding shade to the bottom line of for the letter J in the grid
          firstLetter(x,y);
        
        }
         if (x > 50 && x < 200 && y > 300 && y < 600) {
          stroke(207, 30, 247); // purple , here I am erasing the bottom tip of for the letter J in the grid
          firstLetter(x,y);
        
        }
        if (x >= 0 && x < 100 && y > 300 && y < 600) {
          stroke(252, 57, 3); // dark orange , adding shade to the left bottom line of for the letter J in the grid
          firstLetter(x,y);
        
        } // J pattern which is later turned into a brush
       }
      }

}

void secondPattern(){

for (int y = 0; y < 700; y += 100) {
       for (int x = 0; x < 700; x += 100){
        stroke(207, 30, 247); //purple
        secondLetter(x,y);
          if (x > 150 && x < 500 && y > 99 && y < 501) {
          stroke(247, 164, 30); // orange , area erased for letter O
          secondLetter(x,y);
           }
          if (x > 50 && x < 500 && y > 500 && y < 700) {
          stroke(141, 11, 212); // purple , shade for bottom side of O created
          secondLetter(x,y);
           }
         if (x > 400 && x < 600 && y > 50 && y < 200) {
         stroke(247, 164, 30); // orange, area erased for letter O
         secondLetter(x,y);
         } 
          if (x > 50 && x < 200 && y > 50 && y < 550) {
          stroke(141, 11, 212); // purple , shade for left side of O created
          secondLetter(x,y);
           }
         if (x > 200 && x < 400 && y > 100 && y < 500) {
          stroke(141, 11, 212); // purple , hole/shade within O created
          secondLetter(x,y);
           }
          if (x > 400 && x < 600 && y > 100 && y < 300) {
          stroke(141, 11, 212); // purple , shade for  O tip created
          secondLetter(x,y);
           }
       }
      }  // O pattern which is later turned into a brush

}

void thirdPattern(){

 for (int y = 0; y < 700; y += 100) {
       for (int x = 0; x < 700; x += 75){
        stroke(255, 133, 3); // orange
        thirdLetter(x,y);
        if( x> 50 && x < 200 && y > 50 && y < 600) {
        stroke(255, 3, 3);
        thirdLetter(x,y); // middle line of the letter E in the grid erased
        
        }
        if( x> 0 && x < 100 && y > 50 && y < 600) {
        stroke(255, 247, 0);
        thirdLetter(x,y); // shade(yellow) for left line of the letter E in the grid erased
        
        }
        else if( x> 100 && x < 600 && y > 50 && y < 200) {
        stroke(255, 3, 3);
        thirdLetter(x,y); // top line of the letter E in the grid erased
        
        }
        else if( x> 200 && x < 600 && y > 100 && y < 300) {
        stroke(255, 247, 0);
        thirdLetter(x,y); // shade(yellow) for top line of the letter E in the grid erased
        
        }
       else if( x> 100 && x < 500 && y > 200 && y < 400) {
        stroke(255, 3, 3);
        thirdLetter(x,y); // middle line of the letter E in the grid erased
        
        }
        else if( x> 200 && x < 500 && y > 300 && y < 500) {
        stroke(255, 247, 0);
        thirdLetter(x,y); // shade(yellow) for middle line of the letter E in the grid erased
        
        }
       else if( x> 100 && x < 400 && y > 400 && y < 600) {
        stroke(255, 3, 3);
        thirdLetter(x,y); // bottome line of the letter E in the grid erased
        
        }
        else if( x> 0 && x < 400 && y > 500 && y < 700) {
        stroke(255, 247, 0);
        thirdLetter(x,y); // shade(yellow) for bottom line of the letter E in the grid erased
        
        }
       }
      } // E pattern which is later turned into a brush
    
  
}

void fourthPattern(){

 for (int y = 0; y < 700; y += 100) {
       for (int x = 0; x < 700; x += 100){
        stroke(255, 135, 165); //pink 
        fourthLetter(x,y); 
        if(( x> 200 && x < 400 && y > 200 && y < 600) || (x > 50 && x < 200 && y > 50 && y < 200) || (x > 400 && x < 600 && y > 50 && y < 200) || (x > 300 && x < 500 && y > 100 && y < 300) || (x > 100 && x < 300 && y > 100 && y < 300)) {
        stroke(163, 117, 47);
        fourthLetter(x,y); // new method, erases the whole letter Y in the grid in one go
        
        }
        else if( x> 100 && x < 400 && y > 500 && y < 700) {
        stroke(255, 0, 115);
        fourthLetter(x,y); // shade for bottom line of the letter Y in the grid erased
        
        }
        else if( x> 100 && x < 300 && y > 200 && y < 600) {
        stroke(255, 0, 115);
        fourthLetter(x,y); // shade for bottom left line of the letter Y in the grid erased
        
        }
        else if( ( x> 0 && x < 200 && y > 100 && y < 300) || (x>= 0 && x < 150 && y > 0 && y < 200)) {
        stroke(255, 0, 115);
        fourthLetter(x,y); // shade for top left line of the letter Y in the grid erased
        
        }
    
       }
      } // Y pattern which is later turned into a brush

}

  void mousePressed() {

    println(mouseX); // mousepress to switch between patterns and also so for helping me with understanding the coordinates better
     println(mouseY);
    
  }