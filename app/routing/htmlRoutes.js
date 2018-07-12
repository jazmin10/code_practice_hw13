// =========== HTML ROUTING ===========

// ---------- MAIN PROCESSES ----------

	// Export the following function
	module.exports = function(app) {

		// When a route is "hit" with the following parameters...
		app.get("/:htmlRouting?", function(request, response) {
			// Determine what html page to send back
			determinePage(request, response);

		});
	}

// ---------- FUNCTIONS ----------

	// Determine what html page was requested
	function determinePage(htmlReq, htmlResp) {

		// Determine what route was "hit" and display the appropriate page
			switch (htmlReq.params.htmlRoute) {
				case undefined:
					displayPage(htmlResp, "home page");
					break;
				case "survey":
					displayPage(htmlResp, "survey page");
					break;
				// The browser also sends /favicon.io with each request
				// We don't want to take any action, therefore closing the route
				case "favicon.io":
					htmlResp.end();
				default:
					htmlResp.send("<h1>Cannot find page</h1>");
			}
	}

	// Responds with the appropriate html file
	function displayPage(res, page) {
		res.send(page);
	}

