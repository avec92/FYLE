// ---------- Controller(s). ----------
	
// Add student Cotnroller
app.controller('searchController', ['$scope','$http', function($scope,$http,$window,$location){
    // Storing user details
		$scope.movie=[];
		$scope.show=false;
			// Calling HTTP response
		function success(response, status){
				        $scope.status = status;
                        $scope.movie=response;
                        $scope.movie.title=response.Title;
                        $scope.movie.year=response.Year;
                        $scope.movie.imdbid=response.imdbID;
                        $scope.movie.type=response.Type;
                        $scope.movie.poster=response.Poster;
		}	
        
    function error(status){
        $scope.status = status;
    }

	
		// function calling all other functions
   $scope.search = function() {
       $scope.show=true;
       if(($scope.t) && (!$scope.y) ){
       
            $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?t='+$scope.t+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data,response.status);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.status);
					});
                }
       if(($scope.y) && (!$scope.t) ){
       
            $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?y='+$scope.y+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data,response.status);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.status);
					});
                }
       if(($scope.t) && ($scope.y)){
              $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?t='+$scope.t+'&y='+$scope.y+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data,response.status);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.status);
					});
                }
       
                $scope.template ='html/mlist.html';
            }
                
}]);


// Fetch information Controller

//Directive creation for login page
var myDirectives = angular.module('myDirectives', []);

	myDirectives.directive('myMovie', function() {
	  return {
		restrict: 'AE',
		scope: false, // This indicates the scope to be false, leading to no confliction in passing of data from directive to controller
		templateUrl: 'html/mlist.html'  // This calls the html file mlist
	  };
	});
