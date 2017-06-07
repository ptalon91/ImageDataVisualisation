// Helpers for D3Image template.

// Events for D3Image template.

Template.D3Image.onRendered(function() {
	
	let myImg = new Image();
	myImg.src = 'image.jpg';

	let c = document.getElementById("canvas");
	let ctx = c.getContext("2d");
	ctx.drawImage(myImg, 0, 0);
	let img_data = ctx.getImageData(x, y, 1, 1).data;

	alert(img_data)

});

