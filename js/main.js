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
            bio: "My name is Anthony Vogliano, and I'm a fourth-year Engineering Physics major and EECS minor. I'm your run-of-the-mill physics geek, wannabe racquetball pro, and flannel enthusiast, and I'm excited to contribute to the SES community!",
			description: "",
			img: "img/anthony.jpg",
			name: "Anthony Vogliano",
			position: "President"
		},
		{
            bio: "T.G. is currently a Junior at UC Berkeley majoring in Energy Engineering. She is the Vice President of Society of Engineering Sciences (SES) as well as the co-President of Engineers for a Sustainable World (ESW). She runs a project within ESW, called Man Made Floating Wetlands, which aims to remove the harmful algae on Lake Temescal in Oakland. She is part of another project through ESW called Rainwater Harvesting, that has built a rainwater harvesting system on the Hearst Field Annex in order to save drinking water. She loves reading and talking about energy related topics, and is very social so don't be afraid to email or reach out to her!",
			description: "",
			img: "img/tg.jpg",
			name: "T.G. Roberts",
			position: "Vice-President"
		},
		{
            bio: "Hello! My name is Daniel Frise, and I'm a junior majoring in Engineering Math and Statistics. I am pleased to be able to serve as the Secretary-Treasurer of the Society of Engineering Sciences. Previously I was the Publicity Chair of SES. Beyond this amazing organization, I am an active member of the Newman Hall Parish. In my free time, I enjoy reading books, writing stories, and playing video games (currently Overwatch). I look forward to serving the Engineering Science community for the 2019-2020 academic year!",
            description: "",
            img: "img/daniel.jpg",
            name: "Daniel Frise",
			position: "Secretary/Treasurer"
		},
        {
            bio: "",
            description: "",
            img: "img/nothing.jpg",
            name: "Difan Wen",
            position: "Engineering Physics Representative"
        },
        {
            bio: "Brittany is an Energy Engineering Major at UC Berkeley, and is planning to graduate in the spring of 2021. In addition to her involvement with SES, Brittany is an active member of the Irish Dancers of Berkeley and Engineers for a Sustainable World, and is an officer in the engineering honors society Tau Beta Pi. She is passionate about environmental conservation, and hopes to pursue a career in clean, renewable energy generation.",
            description: "",
            img: "img/brittany.jpg",
            name: "Brittany Wais",
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
            bio: "Hi! I’m a sophomore majoring in Environmental Engineering Science with a minor in Marine Science. Ever since I was a young child, I’ve enjoyed watching National Geographic documentaries about the diverse ecosystems and organisms that inhabit Earth, sparking my interest in the environment. In my free time, I enjoy snowboarding, fishing, playing tennis, and maintaining my fresh and saltwater fish tanks. I'm ALWAYS free for a Jamba Juice run!",
			description: "",
			img: "img/derek.jpg",
			name: "Derek Morimoto",
			position: "Environmental Engineering Science Representative"
		}
	];
})
//--------------------------------------------------------------
