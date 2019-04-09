console.log('hoi, ik werk')


//Code van mohamad & emma - met eigen aanpassingen van mezelf
var uri = 'https://open.data.amsterdam.nl/Activiteiten.json';
var section = document.querySelector('section');
var button = document.getElementById("search");
var cityBtn = document.getElementById("cityBtn")
var loadElement = document.querySelector("span");
var errorMsg = document.querySelector('.errormessage');

//var loaderElement = document.querySelector("main span");

console.log(button);


let jsonData;

function showLoadingSpinner (){
	loadElement.classList.add('loader');

}

function hideLoadingSpinner (){
	loadElement.classList.remove('loader');
	 showData(jsonData);
	
}

(function request() {
     fetch(uri)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            jsonData = data





        })

button.addEventListener('click', function(){
	errorMsg.classList.add('removed');
	showLoadingSpinner();
	setTimeout(hideLoadingSpinner, 3000);
	 
	
})



})() //end: fetch




    //.then(function(data){
//showData();
	//button.addEventListener('click',loadData());

	//function loadData(){

		//loadElement.classList.add('.loader');
		//setTimeout(3000);
		

	//});

     
  // })
//})()




function showData (jsonObj) {
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    //var article = document.createElement('article');
    var activiteiten =jsonObj;
    console.log(activiteiten);
    for (var i = 0; i < activiteiten.length; i++){
	
	    var article = document.createElement('article');


	    var activiteitenBlok = document.createElement('section');
	    activiteitenBlok.textContent = activiteiten[i];

        var activiteitenTitel = document.createElement('h2');
        activiteitenTitel.textContent = activiteiten[i].title;

        var activiteitenDetails = document.createElement('p');
        activiteitenDetails.textContent= activiteiten[i].details.nl.shortdescription;

        var activiteitenCity = activiteiten[i].city     

        var activiteitenlocation = document.createElement('p');
        activiteitenlocation.textContent= activiteiten[i].location.adress + ' ' + activiteiten[i].location.city;
        
        var activiteitenData = document.createElement('p');
        activiteitenData.textContent = activiteiten[i].lastupdated;


        article.appendChild(activiteitenTitel);
        article.appendChild(activiteitenDetails);
        article.appendChild(activiteitenlocation);

        section.appendChild(article);









	}

};


// haalt alles weg...
cityBtn.addEventListener('click', function(){

     	

      if(jsonData.city !== 'AMSTERDAM') {
      	cityBtn.classList.toggle('filter');
      	
		document.body.classList.toggle('notamsterdam');
		showLoadingSpinner();
	setTimeout(hideLoadingSpinner, 3000);


};

}); //end: listener click

   






















//var jsonUrl ="https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";


//var loading = document.querySelector('button');*/


//loading.addEventListener('click', function(){
//	requesting.open.jsonUrl;

//})


 //https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/
//loading.addEventListener('click', loadData());


//function loadData(jsonObj){

	//var movies = jsonObj;
    //var requesting = new XMLHttpRequest();

   // for(i=0 ; i<movies.length; i++){


   // }
//};


//https://www.youtube.com/watch?v=6mT3r8Qn1VY -tutorial JSON laden
//loading.addEventListener('click', loadData());

//function loadData(){
//loadJSON('&origin=*https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json', gotData);

//};

//function gotData (data){
	//console.log(data);

//};

//https://www.youtube.com/watch?v=W6NsAO08vmE -- tutorial json laden 2 (2017)

