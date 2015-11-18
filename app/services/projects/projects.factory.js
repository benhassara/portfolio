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
			},
			{
				name: 'Project Three',
				image: 'http://lorempixel.com/300/200/cats/',
				description: "Yr brooklyn tousled, seitan jean shorts vice everyday carry butcher sartorial thundercats cold-pressed mumblecore truffaut. Cold-pressed raw denim knausgaard, cardigan venmo fixie hoodie occupy. Before they sold out chia PBR&B ethical next level master cleanse. Cold-pressed freegan master cleanse single-origin coffee kickstarter, you probably haven't heard of them gluten-free narwhal slow-carb.",
				github: 'https://github.com/benhassara',
				live: 'https://www.google.com/'
			},
			{
				name: 'Project Four',
				image: 'http://lorempixel.com/300/200/cats/',
				description: "Migas skateboard trust fund bitters, four dollar toast keffiyeh post-ironic neutra chartreuse cold-pressed before they sold out narwhal deep v crucifix sriracha. Bespoke selvage occupy helvetica sustainable, echo park 90's pickled slow-carb VHS biodiesel etsy lo-fi. Shabby chic portland VHS meggings. Master cleanse schlitz before they sold out, intelligentsia crucifix pinterest paleo beard.",
				github: 'https://github.com/benhassara',
				live: 'https://www.google.com/'
			},
			{
				name: 'Project Five',
				image: 'http://lorempixel.com/300/200/cats/',
				description: "Thundercats pabst biodiesel, narwhal asymmetrical shabby chic gluten-free migas quinoa try-hard. Thundercats fap ennui, chillwave shoreditch XOXO beard scenester truffaut slow-carb occupy health goth trust fund 8-bit twee. Actually lo-fi small batch, schlitz fap tousled taxidermy everyday carry pour-over. Vinyl salvia bushwick, squid kitsch small batch blog mlkshk messenger bag cold-pressed trust fund listicle YOLO. ",
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
