steal.config({

	map: {
		"*": {
			'lodash/lodash.js': "lodash",
			'moment_lib/moment_lib.js': "moment_lib",
			'jquery/jquery.js': "jquery",
			"can/util/util.js": "can/util/jquery/jquery.js"		}
	},
	paths: {
		"lodash" : "bower_components/lodash/dist/lodash.js",
		"moment_lib" : "bower_components/momentjs/moment.js",
		"jquery": "can/lib/jquery.1.9.1.js"
	},
	shim: {
		jquery: {
			exports: "jQuery"
		},
		'moment_lib': {
			exports: "moment"
		},
		'lodash' : {
			exports :"_"
		}
	},
	ext: {
		js: "js",
		css: "css",
		less: "steal/less/less-node.js",
		coffee: "steal/coffee/coffee.js",
		ejs: "can/view/ejs/ejs.js",
		mustache: "can/view/mustache/mustache.js"
	},

	fixtures: true
});