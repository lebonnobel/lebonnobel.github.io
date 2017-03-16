nobelApp.factory('nobelService', ['$window', '$http', '$q', function ($window, $http, $q) {
// This service loads all the Nobel data and stores it in variables for other parts of our visualization to acquire
// It also filters data from controller in order to send to D3 in a proper format

	this.projectTitle = "Le Bon Nobel";
	this.projectLink = "https://lebonnobel.github.io/nobel";
	this.projectGithub = "https://github.com/lebonnobel/nobel";
	this.projectVideo = "";

	this.groupMembers = [
		{
			"img": "img/profile-placeholder.png",
			"name": "Caroline Lönn",
			"role": "Frontend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/emma.png",
			"name": "Emma Bäckström",
			"role": "Backend",
			"github": "https://github.com/emmabckstrm",
			"linkedin": "https://www.linkedin.com/in/emmabackstrom/",			
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Hannes Westberg",
			"role": "Backend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Johanna Gustafsson",
			"role": "Frontend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Maria Westling",
			"role": "Frontend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Per Jaakonantti",
			"role": "Frontend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Simóne Stenis Perron",
			"role": "Frontend",
			"github": "",
			"linkedin": "",
		}, {
			"img": "img/profile-placeholder.png",
			"name": "Thomas von Prouss",
			"role": "Backend",
			"github": "",
			"linkedin": "",
		}
	];

	this.getGroup = function() {
		return this.groupMembers;
	}


	return this;
}]);