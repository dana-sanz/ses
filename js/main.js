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
            bio: "Hello, I'm Sinho, a well-caffeinated third-year Engineering Mathematics & Statistics major. I love to learn, whether it's pure mathematics and quantum mechanics or software engineering and machine learning. I also work as a TA for the EECS Department. In my free time, you can find me watching anime or hanging out with my housemates.",
			description: "",
			img: "img/sinho.jpg",
			name: "Sinho Chewi",
			position: "Co-President"
		},
		{
            bio: "Oh Hey There! I'm Vishnu, and I'm a fourth-year Energy Engineering major + EECS minor. I'm uber involved with the energy community here on campus and I love to play basketball and get outdoors!",
			description: "",
			img: "img/vishnu.jpg",
			name: "Vishnu Murthy",
			position: "Co-President"
		},
		{
            bio: "No bio yet.",
			description: "",
			img: "img/nothing.jpg",
			name: "Sean Anderson",
			position: "Treasurer"
		},
		{
            bio: "Hi everyone! My name is Camille and I'm a fourth-year Engineering Physics major. When I'm not debugging my CS project or trying to understand quantum mechanics, I like to play volleyball and bake (especially French desserts)!",
			description: "",
			img: "img/camille.jpg",
			name: "Camille Biscarrat",
			position: "Treasurer"
		},
		{
            bio: "Greetings! I am a third-year in the Energy Engineering program here in beautiful Berkeley, California. I'm an aficionado of outdoor activities: canoeing/kayaking, backpacking, running (things that end in -ing). I'm also a musician who can't seem to find enough silence.",
			description: "",
			img: "img/kean.jpg",
			name: "Kean Amidi-Abraham",
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
            bio: "Hey y'all! I'm Dennis, an Engineering Physics major and EECS minor. In my free time, I like hiking, playing tennis, and watching movies. I also tutor physics at the SLC.",
			description: "",
			img: "img/dennis.jpg",
			name: "Dennis Feng",
			position: "Engineering Physics Representative"
		},
		{
            bio: "Hi! My name is Shreyas and I'm a third-year Engineering Physics major. I also tutor through CS Mentors and love teaching and learning about anything and everything (hit me up with your latest random factoid!). In my free time I love listening to all kinds of music, practicing classical guitar or tenor saxophone, and playing tennis.",
			description: "",
			img: "img/shreyas.jpg",
			name: "Shreyas Parthasarathy",
			position: "Engineering Physics Representative"
		},
		{
            bio: "Hello world! I'm a fourth-year UC Berkeley student studying Environmental Engineering Science and minoring in Energy & Resources. I work as an education co-coordinator with Cal Dining's Sustainability Team, focusing on educational events and outreach in the dining commons. Outside of school and work, I volunteer with the Berkeley Student Food Collective, spend my nights discussing, creating, and filtering wastewater with the Berkeley Water Group and Cal Environmental Team, play half a dozen instruments, and explore the great outdoors through hiking, climbing, and scuba diving!",
			description: "",
			img: "img/jordan-french.jpg",
			name: "Jordan French",
			position: "Environmental Engineering Science Representative"
		},
		{
            bio: "No bio yet.",
			description: "",
			img: "img/nothing.jpg",
			name: "Kevin Qi",
			position: "Event Coordinator"
		},
		{
            bio: "No bio yet.",
			description: "",
			img: "img/nothing.jpg",
			name: "Dennis Wang",
			position: "Event Coordinator"
		},
		{
            bio: "Hi, my name is Drew. I'm an Engineering Physics major by day, a violinist in the University Symphony by night, a photographer sometimes, and a Tiramisu lover always.",
			description: "",
			img: "img/drew.jpg",
			name: "Drew Mendinueto",
			position: "Historian"
		},
		{
            bio: "No bio yet.",
			description: "",
			img: "img/nothing.jpg",
			name: "Vania Fong",
			position: "Project Development/Social Outreach"
		},
		{
            bio: "Hi! My name is Kriya and I'm a rising sophomore in Energy Engineering with a minor in Political Economy! I'm interested in energy innovation and socially-minded engineering, and love running and acapella acai!!",
			description: "",
			img: "img/kriya.jpg",
			name: "Kriya Wong",
			position: "Project Development/Social Outreach"
		}
	];
})
//--------------------------------------------------------------
