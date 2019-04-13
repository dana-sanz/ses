//--------------------------------------------------------------
//initializes controller
angular

.module('ses', [])

.config(function($routeProvider) {
	$routeProvider.
		when('/Home', {templateUrl:'views/home.html'}).
		when('/Members', {controller: 'membersctrl', templateUrl:'views/members.html'}).
		when('/Events', {templateUrl:'views/events.html'}).
		when('/Photos', {templateUrl:'views/photos.html'}).
		when('/Guide', {templateUrl:'views/guide.html'}).
		when('/FAQ', {templateUrl:'views/faq.html'}).
		when('/MissionStatement', {templateUrl: 'views/missionstatement.html'}).
   		when('/Constitution', {templateUrl: 'views/constitution.html'}).
		otherwise({redirectTo:'/Home'});
})

.directive("scrollWatch", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
     this.pageYOffset >= 100 ? scope.scrolledFar = true : scope.scrolledFar = false;
     scope.$apply();
    });
  };
})

//Main (regular controller)
.controller('mainctrl', function ($scope, $location) {
	$scope.items = ['Home', 'Members', 'Events', 'Photos', 'Guide', 'FAQ'];
	$scope.path = $location.path;

	$scope.goto = function(item) {
		$location.path('/'+item);
		$scope.path = item;
  };

  $scope.$on("$locationChangeStart", function() {
    $scope.location = $location.url();
  }); 
})

//--------------------------------------------------------------
// Members page controller.
.controller('membersctrl', function($scope) {
	$scope.officers = [
		{
            bio: "Hi! My name is Shreyas and I'm a fifth-year Engineering Physics and EECS major. I've served as a TA for the CS department and love teaching and learning about anything and everything (hit me up with your latest random factoid!). In my free time I love listening to all kinds of music, practicing classical guitar or tenor saxophone, playing tennis, and cooking.",
			description: "",
			img: "img/shreyas.jpg",
			name: "Shreyas Parthasarathy",
			position: "President"
		},
		{
            bio: "",
			description: "",
			img: "",
			name: "Mona Elalami",
			position: "Vice-President"
		},
		{
            bio: "My name is Anthony Vogliano, and I'm a third-year Engineering Physics major and EECS minor. I'm your run-of-the-mill physics geek, wannabe racquetball pro, and flannel enthusiast, and I'm excited to contribute to the SES community!",
            description: "",
            img: "img/anthony.jpg",
            name: "Anthony Vogliano",
			position: "Treasurer/Engineering Physics Representative"
		},
        {
            bio: "",
            description: "",
            img: "",
            name: "T.G. Roberts",
            position: "Energy Engineering Representative"
        },
		{
            bio: "Hey all, my name is Eric and I'm a third-year Engineering Mathematics and Statistics major with a minor in Computer Science. When I'm not forgetting the minus sign or the close parenthesis, you can find me playing soccer with my IM team, playing chess with my roommates, or rewatching Avatar: The Last Airbender for the 200th time.",
			description: "",
			img: "img/eric.jpg",
			name: "Eric Jankowski",
			position: "Engineering Mathematics & Statistics Representative"
		},
		{
            bio: "Hey everyone! I'm Erina, a fourth-year Environmental Engineering Science major. You might find me running simulations for an Engineers Without Borders project or doing research, but more likely you'll just see me doing an impromptu song and dance in a random place on campus. I'm game for anything related to music, food, books, and baseball.",
			description: "",
			img: "img/erina.jpeg",
			name: "Erina Szeto",
			position: "Environmental Engineering Science Representative"
		}
	];
})
//--------------------------------------------------------------
