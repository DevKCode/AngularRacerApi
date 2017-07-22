racer.controller('racerController',  function($scope,RacerDataService,RacerDetailService){

     $scope.driverDiv = false;
	

	$scope.details = function(driverCode){

		$scope.detail = {};
		$scope.driverDiv = false;

		RacerDetailService.getRaceDetails(driverCode).success(function(response){
			//console.log( response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);

			var driverDetails = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

			$scope.detail={
				familyname:driverDetails.Driver.familyName,
				givenname:driverDetails.Driver.givenName   ,
				position:driverDetails.position,
				nationality :driverDetails.Driver.nationality,
				dob:driverDetails.Driver.dateOfBirth,
				wiki:driverDetails.Driver.url
			};
		});

		 $scope.driverDiv = true;
	}

	RacerDataService.getAllRacers().success(function(response){
		
		$scope.driverList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});

	
	
});