nobelApp.controller('nobelCtrl', function($scope, $http, $rootScope, $timeout, nobelService) {

	$scope.projectTitle = nobelService.projectTitle;
	$scope.projectLink = nobelService.projectLink;
	$scope.projectGithub = nobelService.projectGithub;
	$scope.projectVideo = nobelService.projectVideo;

	$scope.groupMembers = nobelService.groupMembers;


});