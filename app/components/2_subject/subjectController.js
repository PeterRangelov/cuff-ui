cuff_ui.controller('subjectController', ['$scope', 'SubmissionService', 'DropdownService', '$location', '$state', function($scope, SubmissionService, DropdownService, $location, $state) {
	$scope.gender='male';
	$scope.first_name;
	$scope.middle_name;
	$scope.last_name;
	$scope.aliases;
	$scope.drivers_license;
	$scope.ssn;
	$scope.dob;
	$scope.background_info;
	$scope.states = []
	$scope.profession;
	$scope.vehicle;
	$scope.vehicle_plate_number;
	$scope.vin;
	$scope.reward;
	$scope.statesList = DropdownService.getStateList();
	
	console.log($scope.statesList)

	$scope.previousStep = function() {
		console.log('Going back')
		console.log(SubmissionService.contributor)
		$state.go('contributor')
	}
	
	$scope.nextStep = function(isValid) {
		console.log('Validating form. Valid? '+isValid)
		if (isValid) {
			SubmissionService.setSubject($scope);
			$state.go('appearance')
		}
	}
	
	if (!_.isEmpty(SubmissionService.getSubject())) {
		console.log('SubmissionService contains Subject information: ')
		var s = SubmissionService.getSubject()
		console.log(s)
		
		$scope.first_name = s.first_name
		$scope.middle_name = s.middle_name;
		$scope.last_name = s.last_name
		$scope.aliases = s.aliases;
		$scope.drivers_license = s.drivers_license;
		$scope.ssn = s.ssn;
		$scope.dob = s.dob;
		$scope.background_info = s.background_info;
		$scope.profession = s.profession;
		$scope.vehicle = s.vehicle;
		$scope.vehicle_plate_number = s.vehicle_plate_number;
		$scope.vin = s.vin;
		$scope.reward = s.reward;
	}

	if ($location.host()=='localhost') {
		$scope.first_name = 'John';
		$scope.middle_name = 'Middle';
		$scope.last_name = 'Smith';
		$scope.aliases = 'Aliases';
		$scope.drivers_license = 'R-123-456-7890';
		$scope.ssn = '123-45-6789';
		$scope.dob = '1/1/1980';
		$scope.background_info='Background info';
		$scope.profession = 'Con artist';
		$scope.vehicle = 'Huyndai 2001';
		$scope.vehicle_plate_number = 'ABC12345';
		$scope.vin = 'vin number';
		$scope.reward = '$3,000';
	}

	
}]);