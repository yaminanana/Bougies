const slides = document.querySelectorAll('img');
let suivant = document.querySelector('.right');
let precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
   if(index < 2){
    slides[index].classList.remove('active');
    index++;
    slides[index].classList.add('active');
   }else if (index === 2){
    slides[index].classList.remove('active');
    index = 0;
    slides[index].classList.add('active');
   }
    for(i= 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }
    }
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
   if(index > 0){
    slides[index].classList.remove('active');
    index--;
    slides[index].classList.add('active');
   }else if (index === 0){
    slides[index].classList.remove('active');
    index = 2;
    slides[index].classList.add('active');
   }
   for(i= 0; i < cercles.length; i++){
    if(cercles[i].getAttribute('data-clic') - 1 === index){
        cercles[i].classList.add('active-cercle');
    } else {
        cercles[i].classList.remove('active-cercle');
    }
}
}

/*flêches directionnelles*/
document.addEventListener('keydown',keyPressed)

function keyPressed(e){
    if(e.keyCode === 37){
        slidePrecedente();
    }else if (e.keyCode === 39) {
slideSuivante();
    }
}

/*cercles*/

cercles.forEach(cercle => {
    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++){
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        slides[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        slides[index].classList.add('active');
    })
})

/*animation image accueil*/
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );