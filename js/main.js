//--------------------------------------------------------------
//initializes controller
angular

.module('ses', [])

.config(function($routeProvider) {
	$routeProvider.
		when('/Home', {controller:homectrl, templateUrl:'views/home.html'}).
		when('/Members', {controller:membersctrl, templateUrl:'views/members.html'}).
		when('/Events', {controller:eventsctrl, templateUrl:'views/events.html'}).
		when('/Photos', {controller:photosctrl, templateUrl:'views/photos.html'}).
		when('/Guide', {controller:guidectrl, templateUrl:'views/guide.html'}).
		when('/FAQ', {controller:faqctrl, templateUrl:'views/faq.html'}).
		when('/MissionStatement', {templateUrl: 'views/missionstatement.html'}).
		otherwise({redirectTo:'/Home'});
})

.directive("scrollWatch", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
     this.pageYOffset >= 100 ? scope.scrolledFar = true : scope.scrolledFar = false;
     scope.$apply();
    });
  };
});

//Main (regular controller)
function mainctrl ($scope, $location) {
	$scope.items = ['Home', 'Members', 'Events', 'Photos', 'Guide', 'FAQ'];
	$scope.path = $location.path;
  $scope.location = $location.url();

	$scope.goto = function(item) {
		$location.path('/'+item);
		$scope.path = item;
    $scope.location = $location.url();
  };
};

//--------------------------------------------------------------
//Home page controller
function homectrl($scope) {
};
//--------------------------------------------------------------
//About Us page controller
function aboutusctrl($scope) {};
//--------------------------------------------------------------
//Members page controller
function membersctrl($scope) {
	$scope.officers = [
		{
			position:'President',
			description:"",
			name:'Kunal Marwaha',
			img:'img/kunal.jpg',
			bio: "Hey, welcome to SES! I'm a fourth-year Engineering Physics major. I love to play and listen to all sorts of music (although I love jazz and funk). I currently live in the Berkeley Student Co-ops, and teach introductory programming to social scientists at the D-Lab. "
		},
		{
			position:'Secretary/Treasurer',
			description:"",
			name:'Camille Biscarrat',
			img:'img/camille.jpg',
			bio: "Hi everyone! My name is Camille and I'm a third year Engineering Physics major. When I'm not debugging my CS project or trying to understand quantum mechanics, I like to play volleyball and bake (especially French desserts)!"
		},
		{
			position:'Event Coordinator',
			description:"",
			name:'Sinho Chewi',
			img:'img/sinho.jpg',
			bio: "Hi, I'm Sinho (EP '18) and I don't know what to do with my life! In my free time I enjoy watching anime and learning more about various STEM-related fields. I'm currently learning how to live - cooking is hard."
		},
		{
			position:'Event Coordinator',
			description:"",
			name:'Goran Rez-kallah',
			img:'img/goran.jpg',
			bio: "My name is Goran and I'm a third year Engineering Physics major. If I'm not studying or doing homework I'm probably trying to wrap my head around complex issue like world peace or whether or not I should eat my last hot pocket. In my free time I like to binge watch tv shows and train brazilian jiu jitsu."
		},
		{
			position:'Event Coordinator',
			description:"",
			name:'Carielle Spangenberg',
			img:'img/carielle.jpg',
			bio: "Hi my name is Carielle Spangenberg, and I'm a 4th year Engineering Physics major with a minor in Mechanical Engineering. I also work up at LBL, play violin, act as an assistant coach for a high school mock trial team, and love playing board games! This semester, I will be helping out with the Women in Engineering Science events."
		},
		{
			position:'Historian',
			description:"",
			name:'Joy Gu',
			img:'img/joy.jpg',
			bio: "Hi! My name is Joy, and I am a second year studying Engineering Math and Stats! I'm a campus tour guide, officer in the Society of Women Engineers, and Berkeley dog stalker on the side! You can usually find me either walking backwards or hugging the dogs on campus while contemplating the math class I just took :-)"
		},
		{
			position:'Historian',
			description:"",
			name:'Drew Mendinueto',
			img:'img/drew.jpg',
			bio: "Hi, my name is Drew. I'm an Engineering Physics major by day, a violinist in the University Symphony by night, a photographer sometimes, and a Tiramisu lover always."
		},
		{
			position:'Outreach Chair',
			description:"",
			name:'Shreyas Parthasarathy',
			img:'img/shreyas.jpg',
			bio: "Hi! My name is Shreyas and I'm a second-year Engineering Physics major. I also tutor through CS Mentors and love teaching and learning about anything and everything (hit me up with your latest random factoid!). In my free time I love listening to all kinds of music, practicing classical guitar or tenor saxophone, and playing tennis."
		},
		{
			position:'Sports! Overlord',
			description:"",
			name:'Kean Amidi-Abraham',
			img:'img/kean.jpg',
			bio: "Greetings! i am a second year in the Energy Engineering program here in beautiful Berkeley, California. I'm an aficionado of outdoor activities: canoeing/kayaking, backpacking, running (things that end in -ing). I'm also a musician who can't get seem to find enough silence."
		},
		{
			position:'Librarian',
			description:"",
			name:'Pranav Pamidigantam',
			img:'img/pranav.jpg',
			bio: "Hey, I'm Pranav, and I'm graduating as an Engineering Physics major in 2018. I'm really interested in technology as well as theoretical physics. I also love food! Both eating and cooking. I'm probably eating or making something to eat right now."
		},
		{
			position:'Tech Chair',
			description:"",
			name:'Yuan Yuan',
			img:'img/yuan.jpg',
			bio: "Hello! I'm a third year CS and music major. Outside of those two interests, I like making things--especially bad jokes."
		},
		{
			position:'Faculty Correspondent',
			description:"",
			name:'Dennis Feng',
			img:'img/dennis.jpg',
			bio: "My bio: Hey y'all! I'm Dennis, an Engineering Physics major and EECS minor. In my free time, I like hiking, playing tennis, and watching movies. I also tutor physics at the SLC."
		},
	];
};
//--------------------------------------------------------------
//Events page controller
function eventsctrl($scope) {
	$scope.showpastevents = false;
	$scope.show = function() {$scope.showpastevents = true};
	$scope.hide = function() {$scope.showpastevents = false};

	$scope.today = new Date();
	$scope.upcoming = function(item) {return (item.datetime > $scope.today)};
	$scope.past = function(item) {return (item.datetime < $scope.today)};

	$scope.eventheaders = ['Event', 'Type', 'Date', 'Time', 'Location', 'Details'];
	$scope.pasteventheaders = ['Event', 'Type', 'Date', 'Time', 'Location', 'Details'];

	$scope.events = [
		{
			name:'Test event',
			type:'meeting',
			datetime:new Date(2013, 0, 31, 21),
			location:'tba',
			description:'test description',
		},
		{
			name:'Test event 5',
			type:'meeting',
			datetime:new Date(2013, 8, 21, 20),
			location:'tba',
			description:'test description',
		},
	]

};
//--------------------------------------------------------------
//Photos page controller
function photosctrl($scope) {
	$scope.showflickr = false;
};
//--------------------------------------------------------------
//Guide page controller
function guidectrl($scope) {};
//--------------------------------------------------------------
//FAQ page controller
function faqctrl($scope) {
};
//--------------------------------------------------------------
