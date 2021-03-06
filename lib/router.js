// router.js sets the routes to the templates.

// Router configuration.
Router.configure({
	// Load main layout template.
	layoutTemplate: 'layout',
	// Load loading template.
	loadingTemplate: 'loading',
	// Load "page not found" template.
	notFoundTemplate: 'notFound',
	// waitOn, allows to show "loading..." when loading the data from the publications, so the user knows something is happening.
	waitOn: function() {
		// SUbscription to pixels collection.
		return Meteor.subscribe('pixels')
	}
});

// main route, D3 canvas template
Router.route('/', {name: 'D3Image'});