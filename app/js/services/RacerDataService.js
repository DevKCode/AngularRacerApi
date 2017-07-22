racer.factory('RacerDataService', function ($http) {
	

	return {

		getAllRacers : function(){
			return $http({
				 method: 'JSONP', 
        		url: 'http://ergast.com/api/f1/2017/driverStandings.json?callback=JSON_CALLBACK'
			});
			
		}

	}
});

racer.factory('RacerDetailService', function ($http) {

	
	return {
			getRaceDetails : function(id){
					return $http({
						method:'JSONP',
						url:'http://ergast.com/api/f1/2017/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
					});


			
			}
	};
});

