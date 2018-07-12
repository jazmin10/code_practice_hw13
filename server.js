// =========== START THE SERVER ===========

	// Import dependencies
	var express = require("express");
	var bodyParser = require("body-parser");

	var PORT = 3000;
	var app = express();

	// Middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type: "application/vnd.api+json"}));

	// Import routing
	require("./app/routing/apiRoutes.js")(app);
	require("./app/routing/htmlRoutes.js")(app);

	// Start the server
	app.listen(PORT, function() {
		console.log("You are listening on PORT:", PORT);
	});