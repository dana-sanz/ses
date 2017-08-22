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
            bio: "Hello, I'm Sinho, a well-caffeinated fourth-year Engineering Mathematics & Statistics major. I love to learn, whether it's pure mathematics, statistics, or computer science, but I am particularly interested in probability theory. I also work as a TA for the EECS Department. In my free time, you can find me watching anime or hanging out with my housemates.",
			description: "",
			img: "img/sinho.jpg",
			name: "Sinho Chewi",
			position: "President"
		},
		{
            bio: "",
			description: "",
			img: "",
			name: "Eric Jankowski",
			position: "Vice-President"
		},
		{
            bio: "Hi everyone! My name is Camille and I'm a fourth-year Engineering Physics and EECS major. When I'm not debugging my CS project or trying to understand quantum mechanics, I like to play volleyball and bake (especially French desserts)!",
			description: "",
			img: "img/camille.jpg",
			name: "Camille Biscarrat",
			position: "Treasurer"
		},
        {
            bio: "My name is Anthony Vogliano, and I'm a first-year Engineering Physics major with an anticipated EECS minor. I'm your run-of-the-mill physics geek, wannabe racquetball pro, and flannel enthusiast, and though I'm new to Cal, I can't wait to get involved in the SES community!",
            description: "",
            img: "img/anthony.jpg",
            name: "Anthony Vogliano",
            position: "Treasurer"
        },
        {
            bio: "",
            description: "",
            img: "",
            name: "Jash Vora",
            position: "Energy Engineering Representative"
        },
		{
            bio: "Hi! My name is Joy, and I am a third-year studying Engineering Mathematics & Statistics! I'm a campus tour guide, officer in the Society of Women Engineers, and Berkeley dog stalker on the side! You can usually find me either walking backwards or hugging the dogs on campus while contemplating the math class I just took. :-)",
			description: "",
			img: "img/joy.jpg",
			name: "Joy Gu",
			position: "Engineering Mathematics & Statistics Representative"
		},
		{
            bio: "Hi! My name is Shreyas and I'm a third-year Engineering Physics major. I also tutor through CS Mentors and love teaching and learning about anything and everything (hit me up with your latest random factoid!). In my free time I love listening to all kinds of music, practicing classical guitar or tenor saxophone, and playing tennis.",
			description: "",
			img: "img/shreyas.jpg",
			name: "Shreyas Parthasarathy",
			position: "Engineering Physics Representative"
		},
		{
            bio: "",
			description: "",
			img: "",
			name: "Erina Szeto",
			position: "Environmental Engineering Science Representative"
		}
	];
})
//--------------------------------------------------------------
