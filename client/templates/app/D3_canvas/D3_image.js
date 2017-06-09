// Helpers for D3Image template.

// Events for D3Image template.



Template.D3Image.onRendered(function() {
	
	//Parameters...
	// Initialize image object.
	let img = new Image();
	// Image width.
	let img_width = 300;
	// Image height.
	let img_height = 300;

	// Set image object's source.
	img.src = 'image.jpg';
	// Get canvas from DOM and assign to variable.
	let canvas = document.getElementById("canvas");
	// Get canvas' context.
	let context = canvas.getContext("2d");
	// Draw image in the canvas.
	context.drawImage(img, 0, 0);
	// Get image's pixel data. Returns an array of r, g, b and a values, that are not isolated for each pixel.
	let img_data_array = context.getImageData(0, 0, img_width, img_height).data;

	Meteor.call(
		'group_RGBA_per_pixel',
		img_data_array,
		img_width,
		img_height
	);
});


	