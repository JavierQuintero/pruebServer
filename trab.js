let animado = document.querySelectorAll('.t'); // = selector
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    
    for(i=0;i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop){
                animado[i].style.opacity = 1; 
                animado[i].classList.add('haciArriba');  
        }else{
            animado[i].style.opacity = 0; 
            animado[i].classList.remove('haciArriba'); 
        }
    }
}
addEventListener('scroll', mostrarScroll);