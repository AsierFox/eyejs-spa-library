var viewFrameId = 'view-frame';

// Define the controllers
app.controller('contacto'. {

	contact: {},
	contacts: [],

	create: function() {},
	read: function() {},
	update: function() {},
	delete: function() {}

});

// Define the routes
app.getId(viewFrameId)
	.link()
	.route('/', 'views/home.html')
	.route('/contacts/create', 'views/contacts/create.html', 'contacto', null)
	.route('/contacts/show', 'views/contacts/show.html', 'contacto', null)
	.route('/contacts/update', 'views/contacts/update.html', 'contacto', null);
