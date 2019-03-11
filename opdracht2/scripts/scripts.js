
//allemaal niet mijn eigen code gebruikt van github voorbeeld!! dev-edwin op git

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)'



nextBtn.addEventListener('keydown', function(e){
   
    var code = e.keyCode || e.which || e.charCode; 

    console.log(code);

    if(code == 39){

    if(counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
}});

previousBtn.addEventListener('keydown',function(e){
    
    var code = e.keyCode || e.which || e.charCode; 

    console.log(code);
    
    if(code == 37){
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
}});








nextBtn.addEventListener('click',function(){

    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)'

    });

previousBtn.addEventListener('click',function(){
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});















carouselSlide.addEventListener('transitionend',function(){
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});

console.log(carouselImages.length);