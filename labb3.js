var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/one', {
        controller: 'FirstController',
        templateUrl: 'one.html'
    }).when('/second', {
        controller: 'SecondController',
        templateUrl: 'second.html'
    });
});



app.factory('myFactory', function() {
	return { x : 3};
});

app.factory('mySecondFactory', function() {
	return {
		 calc : function (amount) {
			 return 0.4 * amount;
		 }
	 };
});

app.controller('FirstController', function ($scope,$rootScope,$location, myFactory, mySecondFactory, $http) {
	$http.get('http://api.github.com/users/jonkri').then(function (data) {
		console.log(data);
	});
	$scope.go = function(){
		$location.path('/second');
	}
	$scope.add = function() {
		return 2 + myFactory.x;
	};
	
	//lägga funktioner på scope utan faktories se nedan
	$scope.moms = function vat(amount) {
		return 0.2 * amount;
	};
	//lägga funktioner på scope med faktories se nedan
	//för att använda sig av faktorien i en annan controller får man implementera den där
	$scope.buy = function () {
		return mySecondFactory.calc(100);
	};
	
	$rootScope.person = {};
	$scope.pnummer = "";
	function f() {
			if ($scope.teckenForm.$valid) {	
				if($scope.pnummer.match(/^[0-9]{8}$/)){
					$rootScope.person.year = $scope.pnummer[0]+$scope.pnummer[1]+$scope.pnummer[2]+$scope.pnummer[3];
					$rootScope.person.month = $scope.pnummer[4]+$scope.pnummer[5];
					$rootScope.person.day = $scope.pnummer[6]+$scope.pnummer[7];
					e("HUS");
					var signs = [
						{ 
							sign : "Råttan",
							years : [1936, 1948, 1960, 1972, 1984, 1996, 2008, 1900, 1912, 1924],
							egenskaper: "Människor som föds i råttans år är charmiga och attraherar lätt det motsatta könet. De jobbar hårt för att uppnå sina mål och de är ofta perfektionister. De är vanligtvis sparsamma av sig. Råttor har kort stubin och älskar att skvallra. De har höga ambitioner och lyckas ofta uppnå dem. Råttor passar bäst ihop med drakar, apor och oxar."
						 },
						{ 
							sign : "Grisen",
							years : [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019],
							egenskaper: "Grisar är ärliga och artiga människor. Allting de gör, gör de med all kraft. Det finns bara ett håll att gå och det är framåt. Grisar har en stor själsstyrka och är väldigt ärliga."
						 },
						 {
							 sign: "Oxen",
							 years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009],
							 egenskaper: "De som föds i oxens år har mycket tålamod, pratar inte mycket men får andra människor att känna sig bättre. De kan dock verka vara lite underliga och trångsynta och kan bli arga ibland."
						 },
						 {
							 sign: "Tigern",
							 years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010],
							 egenskaper: "Tigrar är känsliga människor som ofta faller i djupa tankar och har lätt för att känna empati med andra människor. De kan däremot ha väldigt dåligt humör."
						 },
						 {
							 sign: "Kaninen",
							 years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011],
							 egenskaper: "Folk födda i kaninens år är talföra, talangfulla och ambitiösa. De är ganska tillbakadragna och har utmärkt smak. Kaniner beundras av andra, är betrodda och har ofta tur med sin ekonomiska situation."
						 },
						 {
							 sign: "Draken",
							 years: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012],
							 egenskaper: "Drakar är sunda människor. De är även energiska, har kort stubin och är väldigt envisa. De är även ärliga, känsliga, modiga och utstrålar tillit och förtroende."
						 },
						 {
							 sign: "Ormen",
							 years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013],
							 egenskaper: "Ormar är djupa människor. De pratar inte så mycket och är väldigt kloka. De behöver aldrig oroa sig över pengar. Ormar är ofta fåfänga, egoistiska och lite snåla. De känner dock ändå en stor sympati med andra och försöker hjälpa de mindre gynnsamma."
						 },
						 {
							 sign: "Hästen",
							 years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014],
							 egenskaper: "Hästar är populära personer. De är bekymmerslösa, skickliga med pengar och lyhörda, även om de ibland pratar för mycket. De är smarta, begåvade och har en svaghet för det motsatta könet."
						 },
						 {
							 sign: "Geten",
							 years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015],
							 egenskaper: "Getter är eleganta och duktiga i humaniora. Till en börjar ser de ut att ha det bättre ställt än alla andra djur, men de är ofta blyga, pessimistiska och fundersamma över livet."
						 },
						 {
							 sign: "Apan",
							 years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016],
							 egenskaper: "De födda i apans år är oberäkneliga genier. Intelligenta, skickliga och flexibla. De är väldigt påhittiga och kan lösa de mest omöjliga problem med lätthet."
						 },
						 {
							 sign: "Tuppen",
							 years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017],
							 egenskaper: "De födda i tuppens år är stora tänkare, komptenta och begåvade. De gillar att ha mycket att göra, tar gärna på sig uppdrag över deras egen förmåga och blir djupt besvikna när de misslyckas."
						 },
						 {
							 sign: "Hunden",
							 years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018],
							 egenskaper: "Folk födda i hundens år har de allra bästa karaktärsdragen av alla djur. De är väldigt lojala, ärliga och inspirerar andra människor till att bli mer självsäkra då de vet hur man bevarar hemligheter."
						 }
					]

					for(i = 0; i < signs.length; i++){
						var years = signs[i].years;
						console.log(signs[i].sign);
						for(j = 0; j < years.length; j++){
							if($rootScope.person.year == years[j]){
								console.log(years[j]);
								$rootScope.person.animal = signs[i];
								return;
							} 
							 else {
								console.log("Du har inget tecken");
								$rootScope.person.animal = { sign : "Du har inget tecken"};
							}
					}
					
				}
			}else{
				$rootScope.person.year = "Fyll i som 4 siffror";
				$rootScope.person.month = "Fyll i som 2 siffror";
				$rootScope.person.day = "Fyll i som 2 siffror";
			}
					
			} else{
				$rootScope.person.year = "INTE GILTIG";
			}
		
	};
	
	function e(y){
		
			console.log("Hej"+y);
		
	}
	
	
	$scope.$watch('namn', f);
	$scope.$watch('pnummer', f);
});



app.controller('SecondController', function ($scope,$rootScope) {
	
    $scope.name = 'Jon';
	$rootScope.y = "info";
});