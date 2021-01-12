const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navbar-links");
hamburger.addEventListener("click" , () => {
    navlinks.classList.toggle("open");
})

var allBlocs = document.querySelectorAll('.bloc');


allBlocs.forEach(bloc => {
    bloc.addEventListener('click', (e) => {

        // console.log(e.target);
        e.target.classList.add('active');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }
    })
})
const buttons = document.querySelectorAll('a');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})
