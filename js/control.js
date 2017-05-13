// ---------- Controller(s). ----------
	
// Add student Cotnroller
app.controller('searchController', ['$scope', function($scope,$http){
    // Storing user details
	$scope.movie={
				t:0,
				y:0,
                type:0
			}	
		
			// Calling HTTP response
		function myHTTP(){
				$http({
					method : "POST",
					headers: {'Content-Type': 'application/json'},
					url : "http://www.omdbapi.com/?apikey=[yourkey]&"+"t="+$scope.movie.t+"&y="+$scope.movie.y+"&type="+$scope.movie.type
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages						
						$scope.status = response.status;
                        $scope.movie.title=response.Title;
                        $scope.movie.year=response.Year;
                        $scope.movie.imdbid=response.imdbID;
                        $scope.movie.type=response.Type;
                        $scope.movie.poster=response.Poster;
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						$scope.status = response.status;
					});
		}	   

	
		// function calling all other functions
   $scope.parameters = function() {
			myHTTP(); //calling service function and creating JSON
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
