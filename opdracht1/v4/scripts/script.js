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






//laatste versie
/*
var boxItems = document.querySelectorAll(".songs");

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
	boxItems.addEventListener('dragstart', startdragging);
	boxItems.addEventListener('dragenter', dragging);
	boxItems.addEventListener('dragleave', dragleave)
	boxItems.addEventListener('dragover', draggingOver);
	boxItems.addEventListener('drop', dropping)
}

dragAndDropping();

*/



var list = document.getElementById('muzieklijst');
var items = document.querySelectorAll('.songs');

console.log(items)




function startdragging(ev){
	dragSrcEl = this;
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/html', this.innerHTML);
	console.log("dragStart");

	console.log(dragSrcEl)

}




function draggingover(ev){
  dragSrcEl.classList.add('zweven');
	ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    return false;
}

function dropping(ev){
	if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = ev.dataTransfer.getData('text/html');
    
    dragSrcEl.classList.add("feedbackEffect");

  

    setTimeout(function(){
            dragSrcEl.classList.remove('feedbackEffect');
            dragSrcEl.classList.remove('zweven');
            
    }, 500);

    console.log(dragSrcEl)



  }
  ev.dataTransfer.dropEffect=''
  return false;
  
}


//alle items kunnen gepakt worden
items[0].addEventListener('dragstart', startdragging);
items[1].addEventListener('dragstart', startdragging);
items[2].addEventListener('dragstart', startdragging);
items[3].addEventListener('dragstart', startdragging);
items[4].addEventListener('dragstart', startdragging);
items[5].addEventListener('dragstart', startdragging);
items[6].addEventListener('dragstart', startdragging);
items[7].addEventListener('dragstart', startdragging);
items[8].addEventListener('dragstart', startdragging);
items[9].addEventListener('dragstart', startdragging);

//alle items kunnen moven 
items[0].addEventListener('dragover', draggingover);
items[1].addEventListener('dragover', draggingover);
items[2].addEventListener('dragover', draggingover);
items[3].addEventListener('dragover', draggingover);
items[4].addEventListener('dragover', draggingover);
items[5].addEventListener('dragover', draggingover);
items[6].addEventListener('dragover', draggingover);
items[7].addEventListener('dragover', draggingover);
items[8].addEventListener('dragover', draggingover);
items[9].addEventListener('dragover', draggingover);


//alle items kunnen droppen 
items[0].addEventListener('drop', dropping);
items[1].addEventListener('drop', dropping);
items[2].addEventListener('drop', dropping);
items[3].addEventListener('drop', dropping);
items[4].addEventListener('drop', dropping);
items[5].addEventListener('drop', dropping);
items[6].addEventListener('drop', dropping);
items[7].addEventListener('drop', dropping);
items[8].addEventListener('drop', dropping);
items[9].addEventListener('drop', dropping);




















