var middleware = {
	requireAuthentication: function(request, response, next) {
		console.log('private route hit.');
		next();
	}, 
	logger: function (request, response , next) {
		console.log(request.method + ' ' + request.originalUrl + ' ' + new Date().toString());
		next();
	}
};

module.exports = middleware;