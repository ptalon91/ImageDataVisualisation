Meteor.myFunctions = {

    group_RGBA_per_pixel : function(img_data_array, img_width, img_height) {

    // Initialize list for loop.
	let grouped_pixel_values_array = [];
	// Return img_data length in order to operate a loop on it.
	let img_data_array_length = img_data_array.length;
	// Compute pixels sum.
	let pixels_sum = img_width*img_height;
	// Compute number of values per pixel (here = 4, RGBA).
	let pixel_values = img_data_array_length/pixels_sum;

	alert(img_data_array);

	while (img_data_array_length > 0){
    	grouped_pixel_values_array.push(img_data_array.splice(0, pixel_values));
	}

	

    },
}