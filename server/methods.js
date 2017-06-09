// Server side's methods. To be called from client side when needed.
Meteor.methods({

	group_RGBA_per_pixel(img_data_array, img_width, img_height){

	    // Initialize list for loop.
		let grouped_pixel_values_array = [];
		// Compute pixels sum.
		let pixels_sum = img_width*img_height;

		let img_data_array_length = img_data_array.length;
		// Compute number of values per pixel (here = 4, RGBA).
		let nb_pixel_values = img_data_array_length/pixels_sum;

		// Initialize counter for loop.
		let counter = 0;

		// Loop to insert pixels in db.
		let i = 0;

		let pixels = [];

		if (pixels.length === 0){
			while (i<360000){
					pixels.push({
						R: img_data_array[i],
						G: img_data_array[i+1],
						B: img_data_array[i+2],
						A: img_data_array[i+3]
					});
					i+=4;
					counter+=1;
					console.log("inserted pixel number " + counter +" in database.");
			}
		console.log("-------------");
		console.log("Done.");
		console.log(pixels.length);
		}
    },
});