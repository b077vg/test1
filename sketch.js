let w=300,h=300; //not scale 200 
let img=[];
let m;
let angle=0;
let q=1;
let mn=0;
let mx=200;
let z=0;
function setup() {  
	createCanvas(w,h);
	for(let i=0;i<200;i++){
		img[i] = loadImage("data/picture1/Movie"+q+".jpg");	
		q++;
	}
}

function draw() {
  background(200);
  if(mouseX>0 && mouseX<w){
  	m=map(mouseX,z,w,mn,mx);
	m=Math.round(m);
	console.log(m);
  }
  createTarget();
}

function createTarget(){
	for(let i=0; i<200; i++){
		if(m==i){
		push();
			image(img[200-i], 0, 0,w,h); 
		pop();
		}
	}
}
