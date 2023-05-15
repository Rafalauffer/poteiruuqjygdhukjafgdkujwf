
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

block_image_width = 150;
block_image_height = 230;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:blockY,
		left:blockX
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		blockX = 1
		new_image('rr1.png');
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png')
	}
	
	if(keyPressed == '65')
	{
		blockX =450;
		new_image('yr.png')
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png')
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	   new_image('br.png')
	}
	
}

