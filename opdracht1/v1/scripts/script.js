console.log("ik doe het yeah");




//for (let i=0; i<songs.length ; i++) {
//	songs[i].addEventListener('dragstart', function(event){
		
//	})
//}

/*for(i=0; i>songs.length; i++) {

songs[1].addEventListener("drag", function(ev){
 
 songs.classList.add("dragging");

})

songs[1].addEventListener("dragend", function(ev){

songs.classList.remove("dragging");

})


dropBox.addEventListener("dragover",function(ev){
ev.preventDefault();

})
}*/

//for (i=0;i>songs.length;i++);

//function dragging(ev){
   // ev.preventDefault();
	//songs[i].classList.add("drag");
//}
//songs.addEventListener('dragenter', dragging(event));


//poging 2


/*var songs = document.querySelectorAll('.nummers');
var container = document.querySelector('.container');





function drag(event){
	document.body.classList.add('drag');
	event.preventDefault();
	dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
}


function dragover(event){
	event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var dragSrcEl = this;
    if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }
  return false;
}


for (i=0; i<songs.length; i++){

	container.addEventListener('dragenter', drag);
	container.addEventListener('dragover', dragover);
	container.addEventListener('drop', drop);
}*/


var boxItems = document.querySelector(".nummers");

function startdragging(event){
	event.preventDefault();
	dragSrcElement = this;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", this.innerHTML);
    console.log('dragging')
}

function dragging(event){
	event.preventDefault();
	document.body.classList.add('dragenter');
	
}


function draggingOver(event){
	
	event.preventDefault();
	document.body.classList.add("draggingover");
	
    event.dataTransfer.dropEffect = "move";
  
	console.log('draggingover', event.target)
	return false;
}


function dragleave(event){
	event.preventDefault();
	e.stopPropagation();
    document.classList.remove("dragenter");
}


function dropping(event){
	event.preventDefault();

  if (dragSrcElement != this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
  }
  console.log('dropping');
 
  
}


function dragAndDropping (event){
	boxItems.addEventListener('dragstart', startdragging)
	boxItems.addEventListener('dragenter', dragging);
	boxItems.addEventListener('dragleave', dragleave)
	boxItems.addEventListener('dragover', draggingOver);
	boxItems.addEventListener('drop', dropping)
}

dragAndDropping();

































