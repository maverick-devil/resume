var main = angular.module("main", []);

main.controller("resumeController", function($scope) {
	$scope.education = [
			{
		    "qualification":"B.Tech. CSE",
		    "year":"2015-19",
		    "name": "Walchand College of Engineering, Sangli",
		    "marks":"7.96"
		  },
		  {
		    "qualification":"12th",
		    "year":"2014-15",
		    "name": "A.D. Joshi Jr. College, Solapur",
		    "marks":"82.15%"
		  },
		  {
		    "qualification":"10th",
		    "year":"2012-13",
		    "name": "Indian Model School, Solapur",
		    "marks":"9.0"
		  }
  		];

  	$scope.images = ["images/svg/java.png", "images/svg/python.png", "images/svg/nodejs.png", "images/svg/mongodb.png", "images/svg/html5.png", "images/svg/css3.png"];

 	$scope.projects = [
 						{
 							"name":"Raksha (Online FIR Registration System)", 
 							"tools": ["Android (Frontend)", "Node.js (Framework)","MongoDB (Database)"], 
 							"description": "Developed an online FIR registration system for Indian Railways for filing FIR from anywhere. \n(A task under Smart India Hackathon Finale.)"
 						},
 						{
 							"name": "Leksicon (Handwriting Recognition)",
 							"tools": ["CNN in Python for handwriting recognition","Android as frontend"],
 							"description": "Developed a handwriting recognition system for the Dyslexic students which would help in identifying mistakes and improve them."
 						},
 						{
 							"name": "Smart Irrigation System",
 							"tools": ["Arduino Uno", "GSM Shield", "Soil Moisture Sensors", "Relay"],
 							"description": "Designed \"Automated Irrigation System\" for farmers with the help of Text Messages. The system can also be controlled manually by farmers."
 						},
 						{
 							"name": "Dhanwantari (Medical Billing System)",
 							"tools": ["Java", "MongoDB"],
 							"description": "Created an application for Medical Stores for generating bills, knowing stock availability."
 						}
 					];

 	$scope.achievements = ["Student of The Year, Std. 5th best performance in sports, academics and other activities.", "Winner, Inter-College Quiz Competition in Std. 11th.", "Finalist in Invictus, a leadership event by Personality Advancement Circle of Engineers.", "Finalist in Dark Peace, a socio-political event by Rotaract Club of WCE Sangli."]
 	$scope.activities = ["Attended Android Workshop conducted by IIT Bombay in TechFest 2016.", "Class topper, International Mathematics Olympiad, std. 6th - 8th.", "Winner, Essay Competitions (English, Marathi), std. 4th and 5th.", "Worked as Internshala Student Partner.", "Conducted & Volunteered Social IT Awareness Campaign (SITAC) from 2016 to 2018.", "Volunteered in various Blood Donation Camps by Rotaract Club of WCE Sangli."]
 	$scope.hobbies = ["Reading", "Writing", "Cooking", "Travelling"];
 	$scope.strengths = ["Leadership", "Determined", "Decisive", "Optimistic"];

})
