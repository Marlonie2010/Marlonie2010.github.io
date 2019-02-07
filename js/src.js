
var canvas;
var ctx;

var ScreenWidth = window.innerWidth * 0.98;
var ScreenHeight = window.innerHeight * 0.98;

var currentX;
var currentY;

var currentR;
var currentG;
var currentB;

function main(){

	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	ctx.canvas.width  = ScreenWidth;
	ctx.canvas.height = ScreenHeight;
	
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, ScreenWidth, ScreenHeight);

	currentX = new Array();
	currentY = new Array();
	
	currentR = new Array();
	currentG = new Array();
	currentB = new Array();

	for(var c = 0;c < 1000;c++){
		currentX[c] = ScreenWidth * 0.5;
		currentY[c] = ScreenHeight * 0.5;

		currentR[c] = Math.floor(Math.random() * 255);
		currentG[c] = Math.floor(Math.random() * 255);
		currentB[c] = Math.floor(Math.random() * 255);

	}
	
};

main();


function addLine1(){


	for(var c = 0;c < currentX.length;c++){

		var x = currentX[c] + (Math.random() * 2.0 - 1.0) * 10.0;
		var y = currentY[c] + (Math.random() * 2.0 - 1.0) * 10.0;
		
		//boundry checking
		if(x < 0){
			x = 0;
		}
		if(x > ScreenWidth){
			x = ScreenWidth;
		}
		if(y < 0){
			y = 0;
		}
		if(y > ScreenHeight){
			y = ScreenHeight;
		}
		
		ctx.beginPath();

		ctx.moveTo(currentX[c], currentY[c]);
		
		ctx.strokeStyle = "#" + (currentR[c]).toString(16) + (currentG[c]).toString(16) + (currentB[c]).toString(16);

		ctx.lineTo(x, y); 
		
		//ctx.arc(x, y, 2, 0, 2*Math.PI);

		ctx.stroke();
		
		currentX[c] = x;
		currentY[c] = y;
	}

}
setInterval(addLine1, 10);
