let player = {name:"", health:12, cash:1000, score:[], ammo:0, gun:"", ammotype:"", speed:10}
	ammoArray = [ammo1 = {name:"standard bullets", price:10, damage:1, accuracy:0},
		ammo2 = {name:"high damage bullets", price:30, damage:4, accuracy:0},
		ammo3 = {name:"high velocity bullets", price:20, damage:2, accuracy:10},
		ammo4 = {name:"elephant gun bullets", price:100, damage:6, accuracy:5}]
	gunArray = [gun1 = {name:"Standard Rifle", accuracy:diceRoll(4) + 1, damage:diceRoll(5) + 1, price:800},
		gun2 = {name:"Elephant Gun", accuracy:0, damage:12, price:35000},
		gun3 = {name:"Rugar Hawkeye", accuracy:diceRoll(10) + 4, damage:diceRoll(2) + 4, price:1150},
		gun4 = {name:"Winchester Magnum", accuracy:diceRoll(15) + 15, damage:diceRoll(5) + 3, price:1700}]
	arrayOfAnimals = [dog = {name:"african wild dog", points:15, health:6, damage:3, dodge:35, distance:0, probability:0, multiplier:0, speed:35},
		wilderbeest = {name:"wilderbeest", points:20, health:16, damage:4, dodge:20, distance:0, probability:0, multiplier:0, speed:35},
		cheetah = {name:"cheetah", points:85, health:6, damage:6, dodge:75, distance:0, probability:0, multiplier:0, speed:100},
		zebra = {name:"zebra", points:10, health:6, damage:4, dodge:30, distance:0, probability:0, multiplier:0, speed:20},
		gorilla = {name:"gorilla", points:15, health:12, damage:6, dodge:45, distance:0, probability:0, multiplier:0, speed:20},
		lioness = {name:"lioness", points:60, health:12, damage:6, dodge:40, distance:0, probability:0, multiplier:0, speed:35},
		wRhino = {name:"white rhino", points:70, health:18, damage:12, dodge:35, distance:0, probability:0, multiplier:0, speed:45},
		bRhino = {name:"black rhino", points:100, health:18, damage:12, dodge:15, distance:0, probability:0, multiplier:0, speed:45},
		lion = {name:"lion", points:80, health:16, damage:12, dodge:35, distance:0, probability:0, multiplier:0, speed:35},
		buffalo = {name:"buffalo", points:25, health:18, damage:6, dodge:15, distance:0, probability:0, multiplier:0, speed:35},
		leopard = {name:"leopard", points:75, health:8, damage:6, dodge:60, distance:0, probability:0, multiplier:0, speed:35},
		elephant = {name:"elephant", points:70, health:24, damage:12, dodge:0, distance:0, probability:0, multiplier:0, speed:25}]
	scar = {points:800, health:6, damage:12, dodge:90, distance:100, multiplier:3}
let animalsIndex
let holder = 0;
let annoyance = 0;
let locationchoose
let animalHealth;
function diceRoll(diceSize){
	return Math.round(Math.random()*diceSize);
}

function gunStore(){
	alert("You enter to the gunstore of your pop`s and his pop`s and his pop`s pop`s and his pop`s pop`s pop`s (yes, you come from a long-line of hunters and wealth). You grab the most expensive gun cause that was always how you roll and honestly, who cares about functionality when you can gloat about how much you paid. At the counter while the clerk was ringing you up, you finally come to the realization that you are no longer rich. Although you`re panicking, you calming search your pockets for any 'pocket change'. You come across $1000 as the clerk finished ringing you up. Unfortunately, your pocket change wouldn`t even put a dent in the outrageously overpriced $100,000 of the crap gun you grabbed.")
	alert("The clerk laughs in your face and kicks you out. Never ever having felt such disgrace and disrespect; you vow to show that clerk and only that clerk, that you don`t need anyone`s help. Wandering the neighborhood of your old drug dealer, you notice a decrepit little shop with a bearly hanging on 'GUNS' sign. With nothing to lose, you stroll right on in. The putrid smell of ballsweat and sex fills the air thick. You approach the shady looking clerk.")
	alert('"Whatcha want?!" the clerk shouted in a irritated tone. You ask the clerk for his array of guns avaible as well as bullets.');
	gunChoose();
	bulletChoose();
}

function annoyed(){
	annoyance++
	if (annoyance>=10){
		alert("Dude!! If you can`t even accomplish this simple task, you`ll probably not survive this game. Let me spare you the embarrassment and me the headache and just end this here now. Goodluck with life. It`s a miracle how you survive this far. END GAME!!!")
		window.open('','_parent',''); 
    	window.close();
	}
}

function hasEnoughMoneyGun(gunCost){
	holder = player.cash - gunCost;
	if (holder<0){		
		alert("Obviously, you lack the basic skills for everyday life, so just let me tell you that you don`t have enough money for that. I`m not even sure why you thought that was a good idea.");
		annoyed();
		gunChoose();
	}else{
		player.cash = holder;
		holder = 0
	}
}

function amountOfBullets(){
	player.ammo = 0;
	let amountB = prompt('"How many do you want?"');
	player.ammo = Number(amountB);
	return Number(amountB);
}

function moneyForBullets(bulletCost,amount){
	holder = player.cash - (bulletCost*amount);
	if (holder<0){
		alert("I know this requires math, but buddy let me tell you; you`re the WORST PERSON EVER!!! STOP spending more than you have.");
		annoyed();
		bulletChoose();
	}else{
		player.cash = holder;
		holder = 0
	}
}

function bulletChoose(){
	player.ammotype = "";
	let bulletChoice = prompt("These are obviously the ammos for the guns: "+"[1]"+ammo1.name+" $"+ammo1.price+": [2]"+ammo2.name+" $"+ammo2.price+": [3]"+ammo3.name+" $"+ammo3.price+": [4]"+ammo4.name+" $"+ammo4.price);
	if (bulletChoice == 1||bulletChoice == ammoArray[0].name){
		moneyForBullets(ammo1.price,amountOfBullets());
	}else if (bulletChoice == 2||bulletChoice == ammoArray[1].name){
		moneyForBullets(ammo2.price,amountOfBullets());
	}else if (bulletChoice == 3||bulletChoice == ammoArray[2].name){
		moneyForBullets(ammo3.price,amountOfBullets());
	}else if (bulletChoice == 4||bulletChoice == ammoArray[3].name){		
		if (player.gun !== gun2.name){
			alert("This ammo can only be used with its respective gun.")
			bulletChoose();
		}else{
			moneyForBullets(ammo4.price,amountOfBullets());
		}
	}else {
		annoyed();
		alert("I see you have never played a game before so let me help you out. Type either the name or the number you want into the input box, ok.")
		bulletChoose();
	}
	player.ammotype = checkResponse(bulletChoice,ammoArray);
}

function gunChoose(){
	player.gun = "";
	annoyed();
	let gunChoice = prompt('"This what I got. Take it or leave it" He shows you four guns:'+": [1]"+gunArray[0].name+" "+"$"+gunArray[0].price+": [2]"+gunArray[1].name+" "+"$"+gunArray[1].price+": [3]"+gunArray[2].name+" "+"$"+gunArray[2].price+": [4]"+gunArray[3].name+" "+"$"+gunArray[3].price);
	if(gunChoice == 1||gunChoice == gunArray[0].name||gunChoice == "standard rifle"){
		hasEnoughMoneyGun(gun1.price);	
	}else if(gunChoice == 2||gunChoice == gunArray[1].name||gunChoice == "elephant gun"){
		hasEnoughMoneyGun(gun2.price);
	}else if(gunChoice == 3||gunChoice == gunArray[2].name||gunChoice == "rugar hawkeye"){
		hasEnoughMoneyGun(gun3.price);
	}else if(gunChoice == 4||gunChoice == gunArray[3].name||gunChoice == "wnichester magnum"){
		hasEnoughMoneyGun(gun4.price);
	}else if(gunChoice=="fuck you"){
		alert("Fuck you right back dickwad. Now choose a fucking gun.");
		gunChoose();
	}else {
		annoyed();
		alert('Well we can`t be all born with a brain. Choose something that is available genius.');
		gunChoose();
	}	
	player.gun = checkResponse(gunChoice,gunArray);
}

function checkResponse(userInput,type){
	if (userInput=="1"||userInput=="2"||userInput=="3"||userInput=="4"){
		return type[userInput-1];
	}else{
		return userInput;
	}
}

function locationChoice(){
	if (player.ammo>=13){
		locationchoose = prompt("With your gun purchased and your pockets full of ammo, you take on the challenge of your lifetime. You take your charter plane to Africa and stay one night in a native village. Because of your arrogance and dim-wittedness, the locals took pity on you and told you the five best hunting spots. Even with your poor recollection skills, you somehow manage to recall the locations to be: Namibia, South Africa, Uganda, Zimbabwe, and Tanzania. Eagarly, you speed off to....");
		if(locationchoose==""||locationchoose==null){
			annoyed();
			alert("*sign* I feel like this shouldn`t be this difficult. All you have to do is 'type' in where you want to go from the selected list. Let`s try this again.");
			locationChoice();
		}else{
			arrival();
		}
	}else if (player.ammo<13&&player.ammo>=6){
		locationchoose = prompt("Being poor now has given more appreciation for money so you decided to save a little. You take your plane to Africa and experience a little bit of the culture. While looking around you overhear that the best places to hunt are: Namibia, South Africa, Uganda, Zimbabwe, and Tanzania. Thus, you decide to go to....");
		if(locationchoose==""||locationchoose==null){
			annoyed();
			alert("*sign* I feel like this shouldn`t be this difficult. All you have to do is 'type' in where you want to go from the selected list. Let`s try this again.");
			locationChoice();
		}else{
			arrival();
		}
	}else {
		locationchoose = prompt("You decided that it was best to gong-ho this adventure and only take "+player.ammo+" amount of ammos. As if you life wasn`t difficult enough, you thought it best to increase those odds. You travel to your destination and ask around for the best hunt locations are. Because you are so dense you don`t notice the intense disdain for you and were confused to why no one was really helping you. You eventually make you way to a group of people who you could only discern as fellow hunters from their bundle of ivory and rare animal hides; not to mention the many array of guns they were caring. You asked them for where they got all those 'trophies' and they hesitantly answer: Namibia, South Africa, Uganda, Zimbabwe, and Tanzania. You thought it smart to take a look in .....")
		if(locationchoose==""||locationchoose==null){
			annoyed();
			alert("*sign* I feel like this shouldn`t be this difficult. All you have to do is 'type' in where you want to go from the selected list. Let`s try this again.");
			locationChoice();
		}else{
			arrival();
		}
	}
}

function arrival(){
	let arrivalRoll = diceRoll(3)
	switch(arrivalRoll){
		case 0:
			alert("You were lucky enough to hitchhike your way to "+locationchoose);
			break;
		case 1:
			alert("On your way to your destination, you were kidnapped by a group of natives. Though your struggles you mange to escape and luckily they were traveling to your location as well. You have arrived at "+locationchoose);
			break;
		case 2:
			alert("Since you`re now as poor as the locals, you thought it was a good idea to travel as such i.e. on foot. It was a long and ardrous journey but finally you made it to "+locationchoose);
			break;
		case 3:
			alert("'How can this be more exciting' you thought to yourself and came up with an answer. With your gun in hand and the determination of a honey badger, you robbed the next passing car. Pushing what would barely pass as a car to it`s limit, you somehow made it to "+locationchoose);
			break;
	}
}

function setUpLocation(){
	if (locationchoose.toLowerCase()=="namibia"){
		namibia();
	}else if (locationchoose.toLowerCase()=="zimbabwe"){
		zimbabwe();
	}else if (locationchoose.toLowerCase()=="uganda"){
		uganda();
	}else if (locationchoose.toLowerCase()=="tanzania"){
		tanzania();
	}else if (locationchoose.toLowerCase()=="south africa"){
		southAfrica();
	}else {
		annoyed();
		alert("Goddamnit, I am sick and tired of you trying to break this game. You are pushing my buttons buddy.");
		locationChoice();
	}
}

function mainHuntCycle(){
	let hours = 5
	while (hours>0){
		if (player.health<=0){
			hours = 0
			alert("Sorry to be the bearer of bad news but you died. Let`s be honest though, we both saw this coming.");
			let retry = prompt("I don`t even know why im asking this but would you like to play again from the beginning?");
			if (retry.toLowerCase()=="yes"){
				masterFunction();
			}else {
				alert("Can`t say I didn`t see that coming. Well let`s hope your real life actually goes FAR better than this virtual one.")
				window.open('','_parent',''); 
    			window.close();
			}
		}else{
			hours = hours - 1;
			setUpLocation();
			hunt()
		}
	}
}

function probabilityRange(initial,final){
	let pushArray = [];
	for(i=initial; i<final && i>=initial; i++){
		pushArray.push(i);
	}
	return pushArray;
}

function intializeProb(animalsArray){
	for (j=0; j<arrayOfAnimals.length; j++){
		arrayOfAnimals[j].probability = probabilityRange(animalsArray[(j*2)],animalsArray[((j*2)+1)]);
	}
}

function setMultiplier(multipyArray){
	for (l=0; l<arrayOfAnimals.length; l++){
		arrayOfAnimals[l].multiplier = multipyArray[l];
	}
}

function encounter(rngNumber){
	if (rngNumber == 100){
		return '"Nothing here. Guess I better look elsewhere."';
		setUpLocation();
	}else {
		let arrayOfAnimalsIndex = 0;
		while (!(arrayOfAnimals[arrayOfAnimalsIndex].probability.includes(rngNumber))){
			arrayOfAnimalsIndex++;
		}
		animalsIndex = arrayOfAnimalsIndex
		let animalEncounter = arrayOfAnimals[arrayOfAnimalsIndex].name;
		if (animalEncounter == "lion"){
			let foundSecret = diceRoll(5);
			if (foundSecret==1){
				animalEncounter = "a strangely familiar Lion. "
				alert('You notice a perculiar looking lion wandering the distance. With your eagle-like vision, you make out what looks to be a distinctive scar across his left eye. "What '+animalEncounter+'I could`ve sworn I`ve seen this animal before."');
			}
		}
		animalHealth = arrayOfAnimals[animalsIndex].health;
		arrayOfAnimals[animalsIndex].distance = (diceRoll(10)*10);
		alert(randomStory() + animalEncounter+" "+arrayOfAnimals[animalsIndex].distance+" meters away.");
	}
}

function hunt(){
	let answer = prompt("Would you like to engage or search for a better game?");
	if (answer.toLowerCase = "engage"){
		while(player.health>0&&animalHealth>0){
			if (player.ammo<=0){
				let end=prompt("WHELP! Looks like you ran out of bullets. You can either let yourself die or go home.");
				if (end=="go home"){
					player.health = 0;
					let ask = prompt("Would you like to try again?")
					if (ask == "yes"){
						masterFunction();
					}else{
						window.open('','_parent',''); 
    					window.close();
					}
				}else{
					window.open('','_parent',''); 
    				window.close();
				}
			}else{
				hit(dodge(player.gun.accuracy,arrayOfAnimals[animalsIndex].dodge,arrayOfAnimals[animalsIndex].distance,player.ammotype.accuracy));
				player.ammo - 1;
				if (animalHealth<arrayOfAnimals[animalsIndex].health){
					alert("Your excellent shooting has wounded "+arrayOfAnimals[animalsIndex].name+", even though you have never shot a gun in your life.")
				}else{
					alert("Well you missed. You can`t win them all champ.")
				}
				animalHit(arrayOfAnimals[animalsIndex].distance);
			}
		}
	}else if (answer.toLowerCase=="search"||answer.toLowerCase=="search for a better game"){
		alert("Definitely up to you. Whether it was a good decision or not is the real question?");
	}else {
		annoyed();
		alert("It seems like you don`t know how to read. That`s something that I can`t help with; but I promise if this keeps happening, I'll be the last one laughing.");
	}
}

function randomStory(){
	let decisiveRoll = diceRoll(3)
	switch(decisiveRoll){
		case 0:
			return 'Traveling the arid plains of '+locationchoose+', you came across a/an ';
			break;
		case 1:
			return 'While in the middle of taking a shit, you were compromised by a/an ';
			break;
		case 2:
			return 'You were on your way to find the perfect selfie spot for your lackluster Instagram, when all out of nowhere your subpar photo session was interrupted by a/an ';
			break;
		case 3:
			return 'You stumble across the natives of this country. You notice that they are enjoying what you can only discern as the "local drug". You learn that it is something called "Jenkum" and decide to take a hit. Feeling high on human excrements, you wander deep in the savannah. You can`t tell if it`s because of the jenkum or if it`s real but you see a/an ';
			break;
	}
}

function dodge(gunAcc,animalDodge,distance,bulletAcc){
	let dodges = animalDodge - (gunAcc+bulletAcc);
	let reducer = [.2,.3,.4,.5,.7,.9,0,15,20,30,35];
	if (distance<0){
		distance = 0;
	}else{
		if (distance<60){
			for (m=0; m<=5; m++){
				if (distance<=(m*10)){
					return dodges * reducer[m];
				}else{}
			}
		}else if (distance>=60){
			for (n=6; n<reducer.length; n++){
				if (distance==(n*10)){
					return dodges + reducer[n];
				}else{}
			}
		}else{
			return dodges;
		}
	}
}

function animalHit(distance){
	let range = distance
	if (range<=70&&arrayOfAnimals[animalsIndex].health>0&&(arrayOfAnimals[animalsIndex].name=="elephant"||arrayOfAnimals[animalsIndex].name=="leopard")){
		if(range<=0){
			player.health-=arrayOfAnimals[animalsIndex].damage;
		}else{
			range-=arrayOfAnimals[animalsIndex].speed
			alert("The "+arrayOfAnimals[animalsIndex].name+"is closing in and is now "+range+"meters away. Good luck.");
		}
	}else if(range<=20&&(arrayOfAnimals[animalsIndex].name=="zebra"||arrayOfAnimals[animalsIndex].name=="gorilla")){
		if(range<=0){
			player.health-=arrayOfAnimals[animalsIndex].damage;
		}else{
			range-=arrayOfAnimals[animalsIndex].speed
			alert("The "+arrayOfAnimals[animalsIndex].name+"is closing in and is now "+range+"meters away. Good luck.");
		}
	}else if(range>=70&&(arrayOfAnimals[animalsIndex].name=="lion"||arrayOfAnimals[animalsIndex].name=="black rhino"||arrayOfAnimals[animalsIndex].name=="african wild dog"||arrayOfAnimals[animalsIndex].name=="lioness")){
		if(range<=0){
			player.health-=arrayOfAnimals[animalsIndex].damage;
		}else{
			range-=arrayOfAnimals[animalsIndex].speed
			alert("The "+arrayOfAnimals[animalsIndex].name+"is closing in and is now "+range+"meters away. Good luck.");
		}
	}else if(range<=70&&(animalHealth<arrayOfAnimals[animalsIndex].health)&&(arrayOfAnimals[animalsIndex].name=="buffalo"||arrayOfAnimals[animalsIndex].name=="wilderbeest")){
		if(range<=0){
			player.health-=arrayOfAnimals[animalsIndex].damage;
		}else{
			range-=arrayOfAnimals[animalsIndex].speed
			alert("The "+arrayOfAnimals[animalsIndex].name+"is closing in and is now "+range+"meters away. Good luck.");
		}	
	}else if(arrayOfAnimals[animalsIndex].name=="cheetah"){
		player.health-=arrayOfAnimals[animalsIndex].damage;
	}
}

function hit(finalDodgeChance){
	let hitChance = diceRoll(100)
	if (hitChance>=finalDodgeChance){
		animalHealth -= playerDmg()
	}else {}
}

function playerDmg(){
	return player.gun.damage + player.ammotype.damage;
}

function namibia(){
	let namibiaProb = diceRoll(100);
		namibiaSet = intializeProb([0,6,6,19,19,32,32,45,0,0,45,55,55,65,65,75,75,78,78,81,81,87,87,100]);
		namibiaMulti = setMultiplier([1.5,1,1,1,0,1.25,1.25,1.25,2,2,1.5,1]);
		encounter(namibiaProb);
}

function tanzania(){
	let tanzaniaProb = diceRoll(100);
		tanzaniaSet = intializeProb([0,3,3,19,19,27,27,43,0,0,43,55,0,0,55,58,58,60,60,76,76,84,84,100]);
		tanzaniaMulti = setMultiplier([1.5,.75,1.25,.75,0,1.25,0,1.5,2,.75,1.25,.75]);
		encounter(tanzaniaProb);
}

function southAfrica(){
	let southAfricaProb = diceRoll(100);
		southAfricaSet = intializeProb([0,3,3,17,17,24,24,38,0,0,38,48,48,58,58,61,61,63,63,77,77,84,84,100]);
		southAfricaMulti = setMultiplier([1.5,.75,1.25,.75,0,1,1,1.5,1.35,.75,1.25,.75]);
		encounter(southAfricaProb);
}

function zimbabwe(){
	let zimbabweProb = diceRoll(100);
		zimbabweSet = intializeProb([0,6,6,23,23,29,29,46,0,0,0,0,46,52,52,55,0,0,55,72,72,78,78,100]);
		zimbabweMulti = setMultiplier([1.5,1,1.5,1,0,0,1.5,2,0,1,1.5,.75]);
		encounter(zimbabweProb);
}

function uganda(){
	let ugandaProb = diceRoll(100);
		ugandaSet = intializeProb([0,0,0,0,0,3,3,18,18,33,33,45,45,52,0,0,52,55,55,75,75,85,85,100]);
		ugandaMulti = setMultiplier([0,0,2,1,1,1,1.5,0,2,.75,1.25,1]);
		encounter(ugandaProb);
}

function masterFunction(){
	player.name = prompt("What do you call yourself?");
	if (player.name==""||player.name==null){
		alert("I see you don`t have a name. Looks like your parents really wanted to keep you. That`s fine, it`s not like I`m going call you by it anyways.");
	}
	alert("Welcome to your own private safari adventure! With you vast wealth, that wasn`t in anyway thanks to you *cough* you`re a spoiled rich kid *cough*, you decided to squander it all on an exclusive, until-you-die safari hunt. Since you`re such a badass, you decided that you don`t need to be bother with any help for this hunt i.e. no map, guide, people who would`ve told you that spending almost all your money on an exclusive safari is probably the dumbest idea since the carsforkids foundation (yes this is a real foundation). Your first destination, and truthfully the only smart thing you have done since this spontaneously frivalous decision, was to go to the gun store.");
	gunStore();
	locationChoice();
	mainHuntCycle();
}
masterFunction();