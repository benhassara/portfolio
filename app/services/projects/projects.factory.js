(function() {
'use strict';

	angular
		.module('app.services.projects')
		.factory('projects', projects);

	function projects() {
		var factory = {};
		var _projects = [
			{
				name: 'Project One',
				image: 'http://lorempixel.com/300/200/cats/',
				description: "Craft beer YOLO sriracha, McSweeney's scenester Tumblr fanny pack roof party Helvetica PBR&B cliche mumblecore Vice. Portland next level letterpress DIY, Austin Etsy gluten-free try-hard fashion axe Odd Future. Whatever Neutra biodiesel, four loko mustache DIY trust fund authentic. Shoreditch bicycle rights cronut, quinoa letterpress tote bag meggings post-ironic swag DIY you probably haven't heard of them Etsy Helvetica.",
				github: 'https://github.com/benhassara',
				live: 'https://www.google.com/'
			},
			{
				name: 'Project Two',
				image: 'http://lorempixel.com/300/200/cats/',
				description: "PBR&B cardigan keffiyeh, roof party bitters American Apparel occupy. Shabby chic mustache chia, slow-carb fingerstache direct trade meh. Keffiyeh shabby chic 8-bit Pinterest 90's, quinoa lomo. Pork belly McSweeney's freegan irony semiotics Marfa bitters tofu street art Banksy, tattooed brunch plaid normcore. Crucifix vinyl whatever, tousled bitters four dollar toast small batch meh vegan blog.",
				github: 'https://github.com/benhassara',
				live: 'https://www.google.com/'
			}
		];

		factory.getProjects = function() {
			return _projects;
		};

		return factory;
	}
})();
