/*John Plank
VFW Project 2
05-05-2012
Apocalypse Checklist*/

window.addEventListener("DOMContentLoaded", function(){
	/*alert(localStorage.value(0));*/
	
	var $ = function(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};

	/*var makeCats = function () {
	var formTags = document.getElementsByTagName("form"),
		selectLi = $("select"),
		makeSelect = document.createElement("select"),
		makeSelect.setAttribute("id", "fear");
	for (var i = 0, j = fearGroups.length; i<j; i++) {
		var makeOption = document.createElement('option');
		var optText = fearGroups[i];
		makeOption.setAttribute('value', optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	}
		selectLi.appendChild(makeSelect);
};

	var fearGroups = ["--Fear level--", "In denial still", "Oops I crapped my pants", "Psalm 144:1"];
	makeCats();*/

var getRadio = function () {
	var radio = document.forms[0].apocalypse;
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			apocalypseValue = radio[i].value;
		}

	}
};

/*var getFearValue = function () {
	if ($("fear").checked) {
		fearValue = $("fear").value;
		} else {
			fearValue = "No"
		}
};*/

	function storeData() {
		var id    			= Math.floor(Math.random()* 1000001);
		getRadio();
		var item 			= {};
		    item.Apocalypse = ["Apocalypse :", apocalypseValue];
			item.firearm	= ["Firearm :", $("firearm").value];
			item.ammo		= ["Ammo :", $("ammo").value];
			item.melee 		= ["Melee weapon :", $("melee weapon").value];
			item.canned		= ["Canned :", $("canned Food").value];
			item.water		= ["Water :", $("water").value];
			item.chain		= ["Chain mesh suit :", $("chain mesh suit").value];
			item.map 		= ["Topographical Map :", $("topographical map").value];
			item.leatherman = ["Leatherman :", $("leatherman").value];
			item.rucksack	= ["Rucksack :", $("rucksack").value];
			item.boots		= ["Boots :", $("boots").value];
			item.matches	= ["Matches :", $("matches").value];
			item.p38		= ["P38", $("p38").value];
			item.intestinal = ["Intestinal Fortitude :", $("intestinal fortitude").value];
			item.item		= ["Item :", $("item").value];			
			item.startdate 	= ["StartDate :", $("startdate").value];
			item.email		= ["Email :", $("email").value];
			item.comments	= ["Comments :", $("comments").value];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Contact Saved!");
	};

	var getData = function () {
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for (var i = 0, len = localStorage.length; i < len; i++) {
			 var makeli = document.createElement("li");
			 makeList.appendChild(makeli);
			 var key = localStorage.key(i);
			 var value = localStorage.getItem(key);
			 var obj = JSON.parse(value);
			 var makeSubList = document.createElement("ul");
			 makeli.appendChild(makeSubList);
			 for (var t in obj) {
			 	var makeSubLi = document.createElement("li");
			 	makeSubList.appendChild(makeSubLi);
			 	var optSubText = obj[t][0]+" "+obj[t][1];
			 	makeSubLi.innerHTML = optSubText;
			 }
		}
	};

	var clearLocal = function () {
		if (localStorage.length === 0) {
			alert("All clear.")
		}else{
			localStorage.clear();
			window.location.reload();
			return false;
		}
	};


		var apocalypseValue;

	var displayLink = $("displayLink");
		displayLink.addEventListener("click", getData);
	 	var clearLink = $("clear");
		clearLink.addEventListener("click", clearLocal);
		var save = $("submit");
		save.addEventListener("click", storeData);




	 });
