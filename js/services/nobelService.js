nobelApp.factory('nobelService', ['$window', '$http', '$q', function ($window, $http, $q) {
// This service loads all the Nobel data and stores it in variables for other parts of our visualization to acquire
// It also filters data from controller in order to send to D3 in a proper format

	this.projectTitle = "Le Bon Nobel";
	this.projectLink = "https://lebonnobel.github.io/nobel";
	this.projectGithub = "https://github.com/lebonnobel/nobel";
	this.projectVideo = "";

	this.groupMembers = [
		{
			"img": "img/caroline.png",
			"name": "Caroline Lönn",
			"role": "Frontend",
			"github": "https://github.com/clonnkth",
			"linkedin": "https://www.linkedin.com/in/carolinelonn/"
		}, {
			"img": "img/emma.png",
			"name": "Emma Bäckström",
			"role": "Frontend/Backend",
			"github": "https://github.com/emmabckstrm",
			"linkedin": "https://www.linkedin.com/in/emmabackstrom/"		
		}, {
			"img": "img/hannes.png",
			"name": "Hannes Westberg",
			"role": "Backend",
			"github": "https://github.com/hanneswestberg",
			"linkedin": ""
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Johanna Gustafsson",
			"role": "Frontend",
			"github": "",
			"linkedin": ""
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Maria Westling",
			"role": "Frontend",
			"github": "",
			"linkedin": ""
		}, {
			"img": "img/per.png",
			"name": "Per Jaakonantti",
			"role": "Frontend",
			"github": "https://github.com/Paeron",
			"linkedin": ""
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Simóne Stenis Perron",
			"role": "Frontend",
			"github": "",
			"linkedin": ""
		}, {
			"img": "img/thomas.jpg",
			"name": "Thomas von Prouss",
			"role": "Backend",
			"github": "https://github.com/zindae",
			"linkedin": "https://www.linkedin.com/in/thomas-von-prouss-b0386611b/"
		}
	];

	this.getGroup = function() {
		return this.groupMembers;
	};


	return this;
}]);
