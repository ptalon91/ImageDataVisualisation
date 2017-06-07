//Publications. Need subscribtions from client side (router.js).

// Pixels publication.
Meteor.publish('pixels', function() {
	return Pixels.find();
});